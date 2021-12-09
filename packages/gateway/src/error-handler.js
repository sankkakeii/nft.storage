import { JSONResponse } from './utils/json-response.js'

/**
 * @param {Error & {status?: number;code?: string;}} err
 * @param {import('./env').Env} env
 */
export function errorHandler(err, env) {
  console.error(err.stack)

  let error = {
    code: err.code || 'HTTP_ERROR',
    message: err.message || 'Server Error',
  }
  let status = err.status || 500

  if (env.sentry && status >= 500) {
    env.sentry.captureException(err)
  }

  return new JSONResponse(error, { status })
}
