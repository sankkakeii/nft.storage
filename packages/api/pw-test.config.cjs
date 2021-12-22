const path = require('path')
const dotenv = require('dotenv')
const execa = require('execa')
const delay = require('delay')

dotenv.config({
  path: path.join(__dirname, '../../.env'),
})

const cli = path.join(__dirname, 'scripts/cli.js')

/** @type {import('esbuild').Plugin} */
const nodeBuiltinsPlugin = {
  name: 'node builtins',
  setup(build) {
    build.onResolve({ filter: /^stream$/ }, () => {
      return { path: require.resolve('readable-stream') }
    })

    build.onResolve({ filter: /^cross-fetch$/ }, () => {
      return { path: path.resolve(__dirname, 'scripts/fetch.js') }
    })
  },
}

/** @type {import('playwright-test').RunnerOptions} */
module.exports = {
  buildConfig: {
    inject: [path.join(__dirname, './scripts/node-globals.js')],
    plugins: [nodeBuiltinsPlugin],
    define: {
      DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
      DATABASE_TOKEN: JSON.stringify(process.env.DATABASE_TOKEN),
    },
  },
  buildSWConfig: {
    inject: [
      path.join(__dirname, './scripts/node-globals.js'),
      path.join(__dirname, './test/scripts/worker-globals.js'),
    ],
    plugins: [nodeBuiltinsPlugin],
    define: {
      DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
      DATABASE_TOKEN: JSON.stringify(process.env.DATABASE_TOKEN),
    },
  },
  beforeTests: async () => {
    await execa(cli, ['db', '--start'])
    console.log('⚡️ Cluster and Postgres started.')

    await execa(cli, ['db-sql', '--cargo', '--testing', '--reset'])
    console.log('⚡️ SQL schema loaded.')

    await delay(2000)
  },
  afterTests: async (ctx, /** @type{any} */ beforeTests) => {
    console.log('⚡️ Shutting down mock servers.')
    await execa(cli, ['db', '--clean'])
  },
}
