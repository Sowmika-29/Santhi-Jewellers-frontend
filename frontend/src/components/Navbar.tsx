import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_DATA } from '../config/menuConfig';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = (title: string) => setActiveMenu(title);
  const handleMouseLeave = () => setActiveMenu(null);

  const handleCategoryClick = (category: string) => {
    navigate(`/category/${category}`);
    setActiveMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gold-light/20 font-serif">
      <nav className="max-w-[1440px] mx-auto px-4 lg:px-8 py-4 lg:py-6 flex justify-between items-center relative">
        {/* Brand Logo - Left */}
        <Link to="/" className="flex flex-col items-center group flex-shrink-0 font-calisto">
          <span className="text-2xl lg:text-4xl font-bold text-gold-dark tracking-tighter leading-none group-hover:text-gold transition-colors">
            SANTHI
          </span>
          <span className="text-[10px] lg:text-[12px] tracking-[0.4em] font-medium text-luxury-accent -mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
            JEWELLERS
          </span>
        </Link>

        {/* Navigation Links - Center */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-[14px] font-bold text-luxury-text hover:text-gold uppercase tracking-[0.2em] transition-colors">Home</Link>
          
          {MENU_DATA.map((item) => (
            <div
              key={item.title}
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
              className={`${item.type !== 'link' ? 'relative' : ''} py-2 group`}
            >
              {item.type === 'link' ? (
                <Link 
                  to={item.path || '#'} 
                  className="text-[14px] font-bold text-luxury-text hover:text-gold uppercase tracking-[0.2em] transition-colors"
                >
                  {item.title}
                </Link>
              ) : (
                <>
                  <button 
                    onClick={() => handleCategoryClick(item.title)}
                    className="flex items-center text-[14px] font-bold text-luxury-text uppercase tracking-[0.2em] hover:text-gold transition-all duration-300"
                  >
                    {item.title}
                    <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${activeMenu === item.title ? 'rotate-180 text-gold' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeMenu === item.title && item.items && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 min-w-[200px] bg-white shadow-2xl border-t-2 border-gold py-4 px-2"
                      >
                        <ul className="space-y-1">
                          {item.items.map((sub) => (
                            <li key={sub}>
                              <Link 
                                to={sub === 'Customized Jewelry' ? '/gold/customized' : `/category/${item.title}/${sub}`}
                                className="block px-4 py-2 text-[13px] text-gray-600 hover:bg-gold/5 hover:text-gold transition-all duration-200 font-sans font-medium"
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-luxury-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu - Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 bg-white z-[60] flex flex-col p-8 lg:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex flex-col items-center font-calisto">
                  <span className="text-3xl font-bold text-gold-dark tracking-tighter leading-none">SANTHI</span>
                  <span className="text-[10px] tracking-[0.3em] font-medium text-luxury-accent">JEWELLERS</span>
                </Link>
                <button onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
              </div>
              
              <div className="flex flex-col space-y-6">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold tracking-widest uppercase">Home</Link>
                {MENU_DATA.map(item => (
                  <div key={item.title} className="space-y-4">
                    <button 
                       onClick={() => handleCategoryClick(item.title)}
                       className="text-xl font-bold tracking-widest uppercase text-gold"
                    >
                      {item.title}
                    </button>
                    {item.items && (
                      <div className="pl-4 flex flex-col space-y-3 border-l border-gold-light">
                        {item.items.map(sub => (
                          <Link 
                            key={sub} 
                            to={sub === 'Customized Jewelry' ? '/gold/customized' : `/category/${item.title}/${sub}`} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-600 font-medium"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
