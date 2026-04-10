const GoldRate = require('../models/GoldRate');
const { fetchAndStoreGoldRate } = require('../services/goldRateService');

exports.getCurrentRate = async (req, res) => {
  try {
    const rate = await GoldRate.findOne().sort({ lastUpdated: -1 });
    if (!rate) {
      return res.status(404).json({ message: 'No rates recorded yet' });
    }
    res.status(200).json(rate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.triggerSync = async (req, res) => {
  try {
    const rate = await fetchAndStoreGoldRate();
    res.status(200).json({ message: 'Sync successful', rate });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
