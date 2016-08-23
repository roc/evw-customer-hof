'use strict';

/*eslint no-process-env: 0*/
/*eslint no-inline-comments: 0*/
/*eslint camelcase: 0*/

let port = process.env.PORT || 8080;

module.exports = {
  env: process.env.NODE_ENV,
  port: port,
  baseUrl: process.env.BASE_URL || 'http://localhost',
  listen_host: process.env.LISTEN_HOST || '0.0.0.0',
  gaCode: process.env.GOOGLE_ANALYTICS_CODE || false,
  assetPath: process.env.ASSET_PATH || '/public',
  govukAssetPath: process.env.GOVUK_ASSET_PATH || '/govuk-assets',
  appPath: 'start',
  session: {
    secret: process.env.SESSION_SECRET || 'howdoesyourgardengrow',
    ttl: process.env.SESSION_TTL || 1200 /* 20 mins */
  },
  mongo: {
    connectionString: process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/evwCustomer'
  }
};
