const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require('node-cron');
require('dotenv').config();

const goldRateRoutes = require('./routes/goldRateRoutes');
const { fetchAndStoreGoldRate } = require('./services/goldRateService');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/gold-rate', goldRateRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schedule daily update at 1:00 AM
cron.schedule('0 1 * * *', async () => {
  console.log('Running daily metal rate update at 1:00 AM');
  try {
    await fetchAndStoreGoldRate();
  } catch (error) {
    console.error('Scheduled update failed:', error.message);
  }
});

// Optional: Run an initial sync on server start if no data exists
const initialSync = async () => {
  try {
    const count = await mongoose.model('GoldRate').countDocuments();
    if (count === 0 && process.env.GOLD_API_KEY !== 'your_goldapi_io_key_here') {
      console.log('No data found, performing initial sync...');
      await fetchAndStoreGoldRate();
    }
  } catch (error) {
    console.error('Initial sync check failed:', error.message);
  }
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  initialSync();
});
