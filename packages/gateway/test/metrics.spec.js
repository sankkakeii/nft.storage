import test from 'ava'

import { gateways } from './constants.js'
import { getMf } from './utils.js'

test.beforeEach((t) => {
  // Create a new Miniflare environment for each test
  t.context = {
    mf: getMf(),
  }
})

test('Gets Metrics content when empty state', async (t) => {
  const { mf } = t.context

  const response = await mf.dispatchFetch('http://localhost:8787/metrics')
  const metricsResponse = await response.text()

  gateways.forEach((gw) => {
    t.is(metricsResponse.includes(`_total_requests{gateway="${gw}"} 0`), true)
    t.is(metricsResponse.includes(`_total_failed{gateway="${gw}"} 0`), true)
    t.is(metricsResponse.includes(`_total_faster{gateway="${gw}"} 0`), true)
    t.is(metricsResponse.includes(`_avg_response_time{gateway="${gw}"}`), true)
    t.is(
      metricsResponse.includes(`_requests_per_time{gateway="${gw}",le=`),
      true
    )
  })
})

test('Gets Metrics content', async (t) => {
  const { mf } = t.context

  // Trigger two requests
  const p = await Promise.all([
    mf.dispatchFetch(
      'http://bafkreidyeivj7adnnac6ljvzj2e3rd5xdw3revw4da7mx2ckrstapoupoq.ipfs.localhost:8787'
    ),
    mf.dispatchFetch(
      'http://bafkreidyeivj7adnnac6ljvzj2e3rd5xdw3revw4da7mx2ckrstapoupoq.ipfs.localhost:8787'
    ),
  ])

  // Wait for waitUntil
  await Promise.all(p.map((p) => p.waitUntil()))

  const response = await mf.dispatchFetch('http://localhost:8787/metrics')
  const metricsResponse = await response.text()

  gateways.forEach((gw) => {
    t.is(metricsResponse.includes(`_total_requests{gateway="${gw}"} 2`), true)
  })
})

test('Gets Metrics from faster gateway', async (t) => {
  const { mf } = t.context

  // Trigger two requests for a CID where gateways[0] is faster
  const p = await Promise.all([
    mf.dispatchFetch(
      'http://bafkreidyeivj7adnnac6ljvzj2e3rd5xdw3revw4da7mx2ckrstapouppq.ipfs.localhost:8787'
    ),
    mf.dispatchFetch(
      'http://bafkreidyeivj7adnnac6ljvzj2e3rd5xdw3revw4da7mx2ckrstapouppq.ipfs.localhost:8787'
    ),
  ])

  // Wait for waitUntil
  await Promise.all(p.map((p) => p.waitUntil()))

  const response = await mf.dispatchFetch('http://localhost:8787/metrics')
  const metricsResponse = await response.text()

  gateways.forEach((gw) => {
    t.is(metricsResponse.includes(`_total_requests{gateway="${gw}"} 2`), true)
  })

  // gateways[0] is always faster
  t.is(
    metricsResponse.includes(`_total_faster{gateway="${gateways[0]}"} 2`),
    true
  )
  t.is(
    metricsResponse.includes(`_total_faster{gateway="${gateways[1]}"} 0`),
    true
  )
})

test('Counts failures', async (t) => {
  const { mf } = t.context

  // Trigger two requests for a CID where gateways[1] fails
  const p = await Promise.all([
    mf.dispatchFetch(
      'http://bafkreidyeivj7adnnac6ljvzj2e3rd5xdw3revw4da7mx2ckrstapopppq.ipfs.localhost:8787'
    ),
    mf.dispatchFetch(
      'http://bafkreidyeivj7adnnac6ljvzj2e3rd5xdw3revw4da7mx2ckrstapopppq.ipfs.localhost:8787'
    ),
  ])

  // Wait for waitUntil
  await Promise.all(p.map((p) => p.waitUntil()))

  const response = await mf.dispatchFetch('http://localhost:8787/metrics')
  const metricsResponse = await response.text()

  t.is(
    metricsResponse.includes(`_total_requests{gateway="${gateways[1]}"} 2`),
    true
  )
  t.is(
    metricsResponse.includes(`_total_failed{gateway="${gateways[1]}"} 2`),
    true
  )
})
