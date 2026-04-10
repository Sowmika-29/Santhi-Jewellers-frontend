import React from 'react';
import { useGoldRate } from '../context/GoldRateContext';

const GoldRateTicker: React.FC = () => {
  const { rates, loading } = useGoldRate();

  if (loading) {
    return (
      <div className="bg-stone-50 text-stone-400 py-2 text-center text-[10px] font-semibold tracking-[0.2em] uppercase border-b border-stone-100">
        Syncing market rates...
      </div>
    );
  }

  const tickerItems = [
    { label: 'GOLD 24K', value: rates.rate24K },
    { label: 'GOLD 22K', value: rates.rate22K },
    { label: 'SILVER', value: rates.silver },
    { label: 'PLATINUM', value: rates.platinum },
  ];

  // Repeat items for seamless animation
  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="bg-white text-stone-600 h-11 flex items-center overflow-hidden whitespace-nowrap border-b border-stone-200 relative z-[60] shadow-sm">
      <div className="animate-marquee inline-block">
        <div className="flex items-center gap-12 px-6">
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.1em] text-[#5B0E23] uppercase opacity-90">
                {item.label}
              </span>
              <span className="text-[11px] lg:text-[12px] font-bold tracking-tight text-[#5B0E23]">
                Rs.{item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoldRateTicker;

