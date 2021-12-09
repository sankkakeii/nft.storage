/* global Response caches */

import { METRICS_CACHE_MAX_AGE } from './constants.js'
import { histogram } from './durable-objects/metrics.js'

/**
 * Retrieve metrics in prometheus exposition format.
 * https://prometheus.io/docs/instrumenting/exposition_formats/
 * @param {Request} request
 * @param {import('./env').Env} env
 * @param {import('./index').Ctx} ctx
 * @returns {Promise<Response>}
 */
export async function metricsGet(request, env, ctx) {
  // TODO: Set cache
  // const cache = caches.default
  // let res = await cache.match(request)

  // if (res) {
  //   return res
  // }
  let res

  const id = env.metricsDurable.idFromName('metrics')
  const stub = env.metricsDurable.get(id)

  const stubResponse = await stub.fetch(request)
  /** @type {Record<string,import('./durable-objects/metrics').GatewayMetrics>} */
  const metricsPerGw = await stubResponse.json()

  const metrics = [
    `# HELP nftstorage_gateway_total_requests Total requests performed.`,
    `# TYPE nftstorage_gateway_total_requests counter`,
    ...env.ipfsGateways.map((gw) => [
      `nftstorage_gateway_total_requests{gateway="${gw}"} ${metricsPerGw[gw].totalReqCount}`,
    ]),
    `# HELP nftstorage_gateway_total_failed Total failed requests.`,
    `# TYPE nftstorage_gateway_total_failed counter`,
    ...env.ipfsGateways.map((gw) => [
      `nftstorage_gateway_total_failed{gateway="${gw}"} ${metricsPerGw[gw].failedReqCount}`,
    ]),
    `# HELP nftstorage_gateway_total_faster Total requests with faster response.`,
    `# TYPE nftstorage_gateway_total_faster counter`,
    ...env.ipfsGateways.map((gw) => [
      `nftstorage_gateway_total_faster{gateway="${gw}"} ${metricsPerGw[gw].fasterReqCount}`,
    ]),
    `# HELP nftstorage_gateway_avg_response_time Average response time.`,
    `# TYPE nftstorage_gateway_avg_response_time gauge`,
    ...env.ipfsGateways.map((gw) => [
      `nftstorage_gateway_avg_response_time{gateway="${gw}"} ${
        metricsPerGw[gw].averageResponseTime || 0
      }`,
    ]),
    `HELP nftstorage_gateway_requests_per_time`,
    `TYPE nftstorage_gateway_requests_per_time histogram`,
    ...histogram.map((t) => {
      return env.ipfsGateways
        .map((gw) => [
          `nftstorage_gateway_requests_per_time{gateway="${gw}",le="${t}"} ${metricsPerGw[gw].responseTimeHistogram[t]}`,
        ])
        .join('\n')
    }),
  ].join('\n')

  res = new Response(metrics, {
    headers: {
      'Cache-Control': `public, max-age=${METRICS_CACHE_MAX_AGE}`,
    },
  })

  // ctx.waitUntil(cache.put(request, res.clone()))

  return res
}
