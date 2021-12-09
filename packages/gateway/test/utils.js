import { Miniflare } from 'miniflare'

export function getMf() {
  return new Miniflare({
    // Autoload configuration from `.env`, `package.json` and `wrangler.toml`
    envPath: true,
    packagePath: true,
    wranglerConfigPath: true,
    // We don't want to rebuild our worker for each test, we're already doing
    // it once before we run all tests in package.json, so disable it here.
    // This will override the option in wrangler.toml.
    buildCommand: undefined,
    wranglerConfigEnv: 'test',
    modules: true,
    durableObjects: {
      METRICS8: 'Metrics8',
      CIDS1: 'Cids1',
    },
  })
}

export function getCIDs() {
  return 'CIDS1'
}
