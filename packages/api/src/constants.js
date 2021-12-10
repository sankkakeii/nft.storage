import { config } from 'dotenv'

config()

const {
  MAGIC_SECRET_KEY,
  SALT,
  SENTRY_DSN,
  DATABASE_TOKEN,
  CLUSTER_SERVICE,
  LOGTAIL_TOKEN,
  MAILCHIMP_API_KEY,
  CLUSTER_API_URL,
  DATABASE_URL,
  DEBUG,
  ENV,
} = process.env

export const secrets = {
  salt: SALT,
  magic: MAGIC_SECRET_KEY,
  sentry: SENTRY_DSN,
  database: DATABASE_TOKEN,
  mailchimp: MAILCHIMP_API_KEY,
  logtail: LOGTAIL_TOKEN,
}

const CLUSTER1 = 'https://nft.storage.ipfscluster.io/api/'
const CLUSTER2 = 'https://nft2.storage.ipfscluster.io/api/'
let clusterUrl

switch (CLUSTER_SERVICE) {
  case 'IpfsCluster':
    clusterUrl = CLUSTER1
    break
  case 'IpfsCluster2':
    clusterUrl = CLUSTER2
    break
  default:
    clusterUrl = CLUSTER_API_URL
    break
}

if (!clusterUrl) {
  throw new Error('CLUSTER_API_URL or CLUSTER_SERVICE must be set')
}

export const cluster = {
  apiUrl: clusterUrl,
  basicAuthToken:
    typeof CLUSTER_BASIC_AUTH_TOKEN !== 'undefined'
      ? CLUSTER_BASIC_AUTH_TOKEN
      : '',
  /**
   * When >2.5MB, use local add, because waiting for blocks to be sent to
   * other cluster nodes can take a long time. Replication to other nodes
   * will be done async by bitswap instead.
   */
  // localAddThreshold: 1024 * 1024 * 2.5,
  localAddThreshold: 0,
}

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL must be set')
}
export const database = {
  url: DATABASE_URL,
}

export const environment = ENV
export const version = '0.0.1'

export const isDebug = DEBUG === 'true'
