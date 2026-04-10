const axios = require('axios');
const GoldRate = require('../models/GoldRate');
require('dotenv').config();

const GOLD_API_URL = 'https://www.goldapi.io/api';

const fetchAndStoreGoldRate = async () => {
  try {
    const config = {
      headers: {
        'x-access-token': process.env.GOLD_API_KEY,
        'Content-Type': 'application/json'
      }
    };

    // Fetch Gold (XAU), Silver (XAG), and Platinum (XPT) in INR
    const [goldRes, silverRes, platinumRes] = await Promise.all([
      axios.get(`${GOLD_API_URL}/XAU/INR`, config),
      axios.get(`${GOLD_API_URL}/XAG/INR`, config),
      axios.get(`${GOLD_API_URL}/XPT/INR`, config)
    ]);

    // GoldAPI returns price per troy ounce. 
    // 1 troy ounce = 31.1035 grams.
    const TROY_OUNCE_TO_GRAM = 31.1035;

    const rate24K = goldRes.data.price / TROY_OUNCE_TO_GRAM;
    const rate22K = rate24K * (22 / 24); // Standard conversion for 22K
    const silver = silverRes.data.price / TROY_OUNCE_TO_GRAM;
    const platinum = platinumRes.data.price / TROY_OUNCE_TO_GRAM;

    // Store in database (Update existing or create new)
    const updatedRate = await GoldRate.findOneAndUpdate(
      {},
      {
        rate24K: Math.round(rate24K),
        rate22K: Math.round(rate22K),
        silver: Math.round(silver),
        platinum: Math.round(platinum),
        lastUpdated: new Date()
      },
      { upsert: true, new: true }
    );

    console.log('Metal rates updated successfully:', updatedRate);
    return updatedRate;
  } catch (error) {
    console.error('Error fetching metal rates:', error.response ? error.response.data : error.message);
    throw error;
  }
};

module.exports = {
  fetchAndStoreGoldRate
};
