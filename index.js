const syncTradesRange = require('./lib/models/trade/sync_range')
const syncCandlesRange = require('./lib/models/candle/sync_range')
const auditCandleGaps = require('./lib/models/candle/audit_gaps')

// TODO: Add order submit/etc logic
module.exports = {
  schema: {
    Trade: {
      schema: null, // use default
      schemaExchangeData: {
        id: Number,
      },

      methods: {
        syncRange: syncTradesRange,
      },
    },

    Candle: {
      schema: null, // use default
      schemaExchangeData: {
        type: String,
      },

      methods: {
        syncRange: syncCandlesRange,
        auditGaps: auditCandleGaps,
      }
    }
  },
}
