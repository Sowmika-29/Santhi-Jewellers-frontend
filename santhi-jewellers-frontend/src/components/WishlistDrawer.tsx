import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Heart, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ isOpen, onClose }) => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-[400px] bg-white shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#5B0E23] text-white p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Heart size={24} className="fill-white" />
                <h2 className="text-xl font-calisto font-bold tracking-wider">My Wishlist</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-6">
              {wishlist.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center">
                    <Heart size={32} />
                  </div>
                  <p className="font-serif italic">Your wishlist is empty</p>
                  <button 
                    onClick={onClose}
                    className="text-[#5B0E23] font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Start Browsing
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {wishlist.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <div className="w-24 h-24 bg-stone-50 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">{item.category}</p>
                          <h3 className="text-stone-800 font-bold leading-tight">{item.name}</h3>
                          <p className="text-[#5B0E23] font-bold mt-1">{item.price}</p>
                        </div>
                        <button 
                          onClick={() => removeFromWishlist(item.id)}
                          className="flex items-center gap-1 text-[11px] text-red-500 hover:text-red-600 transition-colors uppercase font-bold tracking-tighter w-fit"
                        >
                          <Trash2 size={12} />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {wishlist.length > 0 && (
              <div className="p-6 border-t border-stone-100 bg-stone-50/50">
                <button 
                  className="w-full bg-[#5B0E23] text-white py-4 font-bold tracking-[0.2em] uppercase text-sm hover:bg-[#4a0d1d] transition-colors flex items-center justify-center gap-3 shadow-lg"
                >
                  <ShoppingBag size={18} />
                  Add All to Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WishlistDrawer;
