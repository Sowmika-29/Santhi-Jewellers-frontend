import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const heroImage = '/images/showcase/gold_chain_1.webp';
    const goldRing = '/images/showcase/gold_ring_1.webp';
    const silverAnklet = '/images/showcase/silver_anklet_1.webp';
    const diamondRing = '/images/showcase/diamond_ring_1.webp';

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Luxury Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full text-center lg:text-left">
          <div className="max-w-2xl text-white">
            <motion_div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold tracking-[0.4em] uppercase text-sm font-semibold mb-6 block">Sanity Jewellers • Since 1985</span>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
                Crafting Legacies <br /> In Pure Brilliance
              </h1>
              <p className="text-lg opacity-90 mb-10 font-light max-w-md leading-relaxed mx-auto lg:mx-0">
                Witness the intersection of heritage artistry and modern elegance. Explore our curated showcase of certified gold, diamond, and platinum masterpieces.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <Link to="/category/Gold" className="bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-none font-bold tracking-widest transition-all flex items-center justify-center">
                  GOLD SHOWCASE <ChevronRight size={20} className="ml-2" />
                </Link>
                <Link to="/category/Diamond" className="border border-white hover:bg-white text-white hover:text-black px-10 py-4 rounded-none font-bold tracking-widest transition-all">
                  DIAMOND SUITE
                </Link>
              </div>
            </motion_div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <span className="text-gold text-xs font-black tracking-[0.3em] uppercase">Collections</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-luxury-text uppercase tracking-wider">Curated Showcase</h2>
          <div className="h-0.5 w-24 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          <CategoryCard title="Gold" items="Rings, Chains, etc." image={goldRing} link="/category/Gold" />
          <CategoryCard title="Diamond" items="Luxury Solitaires" image={diamondRing} link="/category/Diamond" />
          <CategoryCard title="Silver" items="Traditional Payal" image={silverAnklet} link="/category/Silver" />
          <CategoryCard title="Platinum" items="Bands & Charms" image={heroImage} link="/category/Platinum" />
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="bg-[#fafaf9] py-24 mb-12">
         <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold z-0"></div>
                <img src={diamondRing} alt="Craftsmanship" className="w-full h-[500px] object-cover shadow-2xl relative z-10" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left space-y-8">
                <h3 className="text-gold tracking-[0.3em] font-black text-xs uppercase">OUR ARTISTRY</h3>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-luxury-text leading-tight">Mastering The Fine Art Of Gold & Diamonds</h2>
                <p className="text-gray-500 text-lg leading-relaxed font-light">
                    Every piece at Santhi Jewellers tells a story of meticulous dedication. From the initial hand-drawn sketch to the final laser-precision polish, our master artisans ensure perfection in every silhouette.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-8 text-center lg:text-left">
                  <div>
                    <h4 className="text-xl font-serif font-bold text-gold-dark">100%</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-tighter">BIS Hallmarked</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-gold-dark">IGI</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-tighter">Certified Diamonds</p>
                  </div>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
};

const CategoryCard = ({ title, items, image, link }) => (
  <Link to={link} className="group relative h-[500px] overflow-hidden">
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
    <div className="absolute bottom-12 left-0 right-0 px-8">
      <h3 className="text-3xl font-serif font-bold text-white mb-2 uppercase tracking-widest">{title}</h3>
      <p className="text-gold text-xs font-medium tracking-widest uppercase mb-6">{items}</p>
      <div className="w-12 h-0.5 bg-gold group-hover:w-full transition-all duration-500"></div>
    </div>
  </Link>
);

const motion_div = ({ children, initial, animate, transition }) => (
  <div style={{ transform: animate.y ? `translateY(${animate.y}px)` : 'none', opacity: animate.opacity }}>
    {children}
  </div>
);

export default Home;
