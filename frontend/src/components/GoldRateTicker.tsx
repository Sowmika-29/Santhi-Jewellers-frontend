import React from 'react';
import { useGoldRate } from '../context/GoldRateContext';

const GoldRateTicker: React.FC = () => {
  const { rates, loading } = useGoldRate();

  if (loading) {
    return (
      <div className="bg-[#111] text-gold py-2 text-center text-xs font-semibold tracking-[0.2em] uppercase">
        Loading latest luxury rates...
      </div>
    );
  }

  const tickerItems = [
    { label: 'GOLD 24K', value: rates.rate24K },
    { label: 'GOLD 22K', value: rates.rate22K },
    { label: 'SILVER', value: rates.silver },
    { label: 'PLATINUM', value: rates.platinum },
  ];

  // Repeat the ticker content to ensure a seamless loop
  const content = tickerItems.map(item => `${item.label}: ₹${item.value}/g`).join('   |   ');
  const fullContent = `${content}   |   ${content}   |   ${content}   |   ${content}`;

  return (
    <div className="bg-[#111] text-gold h-9 flex items-center overflow-hidden whitespace-nowrap border-b border-gold-light/10 relative z-[60] shadow-md">
      <div className="animate-marquee inline-block">
        <span className="text-[10px] lg:text-xs font-bold tracking-[0.3em] uppercase px-4 flex items-center">
          {fullContent}
        </span>
      </div>
    </div>
  );
};

export default GoldRateTicker;
