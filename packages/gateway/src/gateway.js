/* eslint-env serviceworker, browser */

import pAny from 'p-any'
import pSettle from 'p-settle'

import { getCidFromSubdomainUrl } from './utils/cid.js'

/**
 * @typedef {Object} GatewayResponse
 * @property {Response} response
 * @property {string} url
 * @property {number} responseTime
 */

/**
 * Handle gateway request
 *
 * @param {Request} request
 * @param {import('./env').Env} env
 * @param {import('./index').Ctx} ctx
 */
export async function gatewayGet(request, env, ctx) {
  const reqUrl = new URL(request.url)
  const cid = getCidFromSubdomainUrl(reqUrl.hostname)

  const gatewayReqs = env.ipfsGateways.map(async (url) => {
    const ipfsUrl = new URL('ipfs', url)
    const startTs = Date.now()
    // TODO: Should we timeout requests?
    const response = await fetch(
      `${ipfsUrl.toString()}/${cid}${reqUrl.pathname || ''}`
    )

    /** @type {GatewayResponse} */
    const gwResponse = {
      response,
      url,
      responseTime: Date.now() - startTs,
    }
    return gwResponse
  })

  const { response, url } = await pAny(gatewayReqs)

  ctx.waitUntil(
    (async () => {
      const responses = await pSettle(gatewayReqs)
      const successFullResponses = responses.filter(
        (r) => r.value?.response?.ok
      )

      await Promise.all([
        updateMetrics(request, env, responses, url),
        updateCids(request, env, successFullResponses, cid),
      ])
    })()
  )

  // forward gateway response
  return response
}

/**
 * @param {Request} request
 * @param {import('./env').Env} env
 * @param {pSettle.PromiseResult<GatewayResponse>[]} responses
 * @param {string} fasterUrl
 */
async function updateMetrics(request, env, responses, fasterUrl) {
  const id = env.metricsDurable.idFromName('metrics')
  const stub = env.metricsDurable.get(id)

  /** @type {import('./durable-objects/metrics').ResponseStats[]} */
  const responseStats = responses.map((r) => ({
    ok: r?.value?.response?.ok,
    url: r?.value?.url,
    responseTime: r?.value?.responseTime,
    faster: fasterUrl === r?.value?.url,
  }))

  await stub.fetch(_getUpdateRequestUrl(request, responseStats))
}

/**
 * @param {Request} request
 * @param {import('./env').Env} env
 * @param {pSettle.PromiseResult<GatewayResponse>[]} responses
 * @param {string} cid
 */
async function updateCids(request, env, responses, cid) {
  const id = env.cidsDurable.idFromName('cids')
  const stub = env.cidsDurable.get(id)

  /** @type {import('./durable-objects/cids').CidUpdateRequest} */
  const updateRequest = {
    cid,
    urls: responses.filter((r) => r.isFulfilled).map((r) => r?.value?.url),
  }

  await stub.fetch(_getUpdateRequestUrl(request, updateRequest))
}

/**
 * Get a Request to update a durable object
 *
 * @param {Request} request
 * @param {Object} data
 */
function _getUpdateRequestUrl(request, data) {
  const reqUrl = new URL(
    'update',
    request.url.startsWith('http') ? request.url : `http://${request.url}`
  )
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  return new Request(reqUrl.toString(), {
    headers,
    method: 'PUT',
    body: JSON.stringify(data),
  })
}
