import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { JEWELLERY_DATA } from '../constants/jewelleryData';

const SubCategoryPage = () => {
  const { type, sub } = useParams();

  // Filter logic: 
  // If 'sub' is present, match both category and subcategory.
  // If 'sub' is missing, match only category.
  const items = JEWELLERY_DATA.filter(item => {
    const categoryMatch = item.category.toLowerCase() === type?.toLowerCase();
    if (sub) {
      return categoryMatch && item.subcategory.toLowerCase() === sub?.toLowerCase();
    }
    return categoryMatch;
  });

  // Limit to 9 items as requested for a clean grid
  const displayedItems = items.slice(0, 9);

  return (
    <div className="min-h-screen bg-[#fafaf9] pt-16 pb-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-serif text-luxury-text font-bold uppercase tracking-widest"
          >
            {type} {sub || 'COLLECTIONS'}
          </motion.h1>
          <div className="h-0.5 w-24 bg-gold mx-auto"></div>
          <p className="text-gray-500 font-sans tracking-wide">
            {sub 
              ? `A curated selection of the finest ${type?.toLowerCase()} ${sub?.toLowerCase()} masterpieces.`
              : `Explore our prestigious collection of ${type?.toLowerCase()} jewellery.`
            }
          </p>
        </div>

        {/* Gallery Grid - 3 Columns Desktop */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="group bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 rounded-sm"
              >
                <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Jewellery+Showcase';
                    }}
                  />
                  <div className="absolute inset-0 bg-gold-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-center space-y-3">
                  <span className="text-[10px] text-gold uppercase tracking-[0.3em] font-black">{item.subcategory}</span>
                  <h3 className="text-[18px] font-serif font-bold text-luxury-text uppercase tracking-wider">{item.name}</h3>
                  <div className="h-[1px] w-8 bg-gold/30 mx-auto group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-[13px] text-gray-400 font-sans font-light px-4">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white shadow-sm border border-gray-50 rounded-lg">
            <h2 className="text-3xl text-gray-300 font-serif mb-6 italic">No items available in this category yet.</h2>
            <Link to="/" className="text-gold font-bold tracking-[0.3em] uppercase hover:underline">Return to Home</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubCategoryPage;
