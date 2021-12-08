import Toucan from 'toucan-js'

import pkg from '../package.json'
import { JSONResponse } from './utils/json-response.js'

/**
 * @param {Error & {status?: number;code?: string;}} err
 * @param {Request} request
 * @param {import('./index').Env} env
 */
export function errorHandler(err, request, env) {
  console.error(err.stack)

  let error = {
    code: err.code || 'HTTP_ERROR',
    message: err.message || 'Server Error',
  }
  let status = err.status || 500

  const sentry = getSentry(request, env)
  if (sentry && status >= 500) {
    sentry.captureException(err)
  }

  return new JSONResponse(error, { status })
}

/**
 * Get sentry instance if configured
 *
 * @param {Request} request
 * @param {import('./index').Env} env
 */
function getSentry(request, env) {
  if (!env.SENTRY_DSN) {
    return
  }

  return new Toucan({
    request,
    dsn: env.SENTRY_DSN,
    allowedHeaders: ['user-agent', 'x-client'],
    allowedSearchParams: /(.*)/,
    debug: false,
    environment: env.ENV || 'dev',
    rewriteFrames: {
      root: '/',
    },
    release: env.VERSION,
    pkg,
  })
}
