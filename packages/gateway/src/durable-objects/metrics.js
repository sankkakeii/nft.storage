/**
 * @typedef {Object} GatewayMetrics
 * @property {number} totalReqCount total number of performed requests
 * @property {number} failedReqCount total number of requests failed
 * @property {number} fasterReqCount number of performed requests where faster
 * @property {Record<string, number>} responseTimeHistogram
 * @property {number} [averageResponseTime]
 *
 * @typedef {Object} ResponseStats
 * @property {string} url gateway URL
 * @property {boolean} ok request was successful
 * @property {number} [responseTime] number of milliseconds to get response
 * @property {boolean} [faster]
 */

/**
 * Durable Object for keeping Metrics state.
 */
export class Metrics8 {
  constructor(state, env) {
    this.state = state
    /** @type {Array<string>} */
    this.ipfsGateways = JSON.parse(env.IPFS_GATEWAYS)

    // `blockConcurrencyWhile()` ensures no requests are delivered until initialization completes.
    this.state.blockConcurrencyWhile(async () => {
      /** @type {Map<string, GatewayMetrics>} */
      this.gatewayMetrics = new Map()

      // Get state and initialize if not existing
      const storedMetricsPerGw = await Promise.all(
        this.ipfsGateways.map(async (gw) => {
          /** @type {GatewayMetrics} */
          const value = (await this.state.storage.get(gw)) || {
            ...defaultCounter,
          }

          return {
            gw,
            value,
          }
        })
      )

      storedMetricsPerGw.forEach(({ gw, value }) => {
        this.gatewayMetrics.set(gw, value)
      })
    })
  }

  // Handle HTTP requests from clients.
  async fetch(request) {
    // Apply requested action.
    let url = new URL(request.url)
    switch (url.pathname) {
      case '/update':
        const data = await request.json()
        // Get updated Metrics
        const updatedMetrics = this._getUpdatedMetrics(data)
        // Save updated Metrics
        await Promise.all(
          this.ipfsGateways.map((gw) =>
            this.state.storage.put(gw, updatedMetrics.get(gw))
          )
        )
        return new Response()
      case '/metrics':
        const resp = {}
        this.ipfsGateways.forEach((url) => {
          resp[url] = this.gatewayMetrics.get(url)
        })

        return new Response(JSON.stringify(resp))
      default:
        return new Response('Not found', { status: 404 })
    }
  }

  /**
   * @param {ResponseStats[]} responseStats
   */
  _getUpdatedMetrics(responseStats) {
    const updatedMetrics = this.gatewayMetrics

    responseStats.forEach((stats) => {
      const gwMetrics = {
        ...updatedMetrics.get(stats.url),
      }

      if (!stats.ok) {
        // Update request count
        gwMetrics.totalReqCount += 1
        gwMetrics.failedReqCount += 1

        // Update metrics
        updatedMetrics.set(stats.url, gwMetrics)
        return updatedMetrics
      }

      // Update average response time
      if (!gwMetrics.averageResponseTime) {
        gwMetrics.averageResponseTime = stats.responseTime
      } else {
        gwMetrics.averageResponseTime = updateAverageValue(
          stats.responseTime,
          gwMetrics.averageResponseTime,
          gwMetrics.totalReqCount
        )
      }

      // Update request count
      gwMetrics.totalReqCount += 1

      // Update faster count if appropriate
      if (stats.faster) {
        gwMetrics.fasterReqCount += 1
      }

      // Update histogram
      const gwHistogram = {
        ...gwMetrics.responseTimeHistogram,
      }

      const histogramCandidate =
        histogram.find((h) => stats.responseTime <= h) ||
        histogram[histogram.length - 1]
      gwHistogram[histogramCandidate] += 1
      gwMetrics.responseTimeHistogram = gwHistogram

      // Update metrics
      updatedMetrics.set(stats.url, gwMetrics)
    })

    return updatedMetrics
  }
}

function updateAverageValue(newValue, oldAverage, numberOfValues) {
  return (oldAverage * numberOfValues + newValue) / (numberOfValues + 1)
}

export const histogram = [300, 500, 750, 1000, 1500, 2000, 3000, 5000, 10000]

const defaultCounter = {
  totalReqCount: 0,
  failedReqCount: 0,
  fasterReqCount: 0,
  responseTimeHistogram: Object.fromEntries(histogram.map((h) => [h, 0])),
  averageResponseTime: undefined,
}
