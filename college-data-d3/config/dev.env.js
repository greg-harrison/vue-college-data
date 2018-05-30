'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  US_GOV_API_KEY: JSON.stringify(process.env.US_GOV_API_KEY),
});
