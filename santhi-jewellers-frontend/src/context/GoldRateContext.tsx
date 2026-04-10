import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const GoldRateContext = createContext();

export const GoldRateProvider = ({ children }) => {
  const [rates, setRates] = useState({ rate24K: 0, rate22K: 0, silver: 0, platinum: 0 });
  const [loading, setLoading] = useState(true);

  const fetchRates = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/gold-rate');
      setRates(res.data);
    } catch (error) {
      console.error('Failed to fetch gold rates');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  return (
    <GoldRateContext.Provider value={{ rates, loading, refreshRates: fetchRates }}>
      {children}
    </GoldRateContext.Provider>
  );
};

export const useGoldRate = () => useContext(GoldRateContext);
