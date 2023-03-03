const getConfig = () => {
    const env = process.env.NODE_ENV || 'development'
    let config
    if (env == 'production') config = require('../config/prod')
    else if (env == 'stagging') config = require('../config/stagging')
    else config = require('../config/dev')
    if (!config.env) config.env = env
    return config
  }
  
  module.exports = { getConfig }