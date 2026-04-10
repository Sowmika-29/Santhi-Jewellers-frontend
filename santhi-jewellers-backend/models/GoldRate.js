const mongoose = require('mongoose');

const GoldRateSchema = new mongoose.Schema({
  rate24K: {
    type: Number,
    required: true,
  },
  rate22K: {
    type: Number,
    required: true,
  },
  silver: {
    type: Number,
    required: true,
  },
  platinum: {
    type: Number,
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('GoldRate', GoldRateSchema);
