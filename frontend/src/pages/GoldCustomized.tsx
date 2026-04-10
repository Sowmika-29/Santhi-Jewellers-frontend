import React from 'react';
import { motion } from 'framer-motion';
import { Star, Gift, Sparkles, Scroll, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

const GoldCustomized = () => {
    // Specialized Data for this page
    const whyChoose = [
        { icon: <Sparkles className="text-gold" />, title: 'Express Your Style', desc: 'Customized names, initials, dates, or symbols.'},
        { icon: <Gift className="text-gold" />, title: 'Gift Something Special', desc: 'Perfect for weddings, birthdays, or celebrations.'},
        { icon: <Star className="text-gold" />, title: 'Own a Unique Piece', desc: 'Handcrafted with premium gold and intricate designs.'},
        { icon: <Scroll className="text-gold" />, title: 'Celebrate Traditions', desc: 'Combines classic craftsmanship with modern customization.'},
    ];

    const whyBuyFromUs = [
        { icon: <Star size={24} />, title: 'Expert Craftsmanship', desc: 'Skilled artisans bring your vision to life.'},
        { icon: <CheckCircle2 size={24} />, title: 'Premium Quality Gold', desc: 'Long-lasting shine and durability.'},
        { icon: <ShieldCheck size={24} />, title: 'Secure Ordering', desc: 'Safe customization and checkout process.'},
        { icon: <Clock size={24} />, title: 'Timely Delivery', desc: 'Perfect for weddings and special anniversaries.'},
    ];

    const bracelets = [
        { name: 'Elegant Name Bracelet', img: '/images/showcase/custom_name_bracelet.webp', sub: 'NAME BRACELETS' },
        { name: 'Infinity Initials Bracelet', img: '/images/showcase/custom_name_bracelet.webp', sub: 'NAME BRACELETS' },
        { name: 'Signature Gold Link', img: '/images/showcase/custom_name_bracelet.webp', sub: 'NAME BRACELETS' },
        { name: 'Men\'s Bold Engraved', img: '/images/showcase/custom_men_bracelet.webp', sub: 'FOR MEN & WOMEN' },
        { name: 'Heritage Men\'s Band', img: '/images/showcase/custom_men_bracelet.webp', sub: 'FOR MEN & WOMEN' },
        { name: 'Unity Custom Cuff', img: '/images/showcase/custom_men_bracelet.webp', sub: 'FOR MEN & WOMEN' },
    ];

    const pendants = [
        { name: 'Oval Photo Locket', img: '/images/showcase/custom_photo_pendant.webp', sub: 'PHOTO PENDANTS' },
        { name: 'Classic Memory Pendant', img: '/images/showcase/custom_photo_pendant.webp', sub: 'PHOTO PENDANTS' },
        { name: 'Heart Photo Keepsake', img: '/images/showcase/custom_photo_pendant.webp', sub: 'PHOTO PENDANTS' },
    ];

    const rings = [
        { name: 'Date Engraved Ring', img: '/images/showcase/custom_ring_1.webp', sub: 'CUSTOM RINGS' },
        { name: 'Initial Gold Band', img: '/images/showcase/custom_ring_1.webp', sub: 'CUSTOM RINGS' },
        { name: 'Custom Solitaire', img: '/images/showcase/custom_ring_1.webp', sub: 'CUSTOM RINGS' },
    ];

    const lightweightItems = [
        { name: 'Lightweight Heart Gold Haram', desc: '22K Gold with chic heart patterns for everyday elegance.', img: '/images/showcase/lightweight_heart_haram.webp' },
        { name: 'Designer Finish Silver Bangle', desc: 'Smooth finish silver bangle, perfect for everyday wear.', img: '/images/showcase/lightweight_silver_bangle.webp' },
        { name: 'Lightweight Silver Thandai', desc: 'Traditional charm with all-day comfort for tiny feet.', img: '/images/showcase/lightweight_baby_thandai.webp' }
    ];

    return (
        <div className="bg-white font-sans overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative h-[65vh] flex items-center justify-center text-center">
                <div className="absolute inset-0 z-0">
                    <img src="/images/showcase/custom_hero.webp" className="w-full h-full object-cover" alt="Custom Jewelry" />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 max-w-4xl px-4 text-white space-y-6">
                    <motion.h1 initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
                        Gold Customized Jewelry – Bracelets, Rings & Pendants
                    </motion.h1>
                    <motion.p initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.1}} className="text-lg text-gray-200 font-light max-w-2xl mx-auto italic">
                        Discover the ultimate collection where tradition meets personalization. Each piece is crafted to reflect your unique personality and story.
                    </motion.p>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-20 max-w-4xl mx-auto px-4 text-center">
                <p className="text-xl text-gray-700 leading-relaxed font-serif">
                    Customized gold jewelry is more than an accessory—it’s a reflection of your story. Our collection combines classic craftsmanship with modern personalization to create emotional value that lasts a lifetime.
                </p>
                <div className="h-1 w-20 bg-gold mx-auto mt-8 opacity-50"></div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="py-20 bg-[#fafaf9]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-serif text-center mb-16 uppercase tracking-[0.2em] text-luxury-text font-bold">Why Choose Customized Jewelry?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChoose.map((item, i) => (
                            <motion.div key={i} whileHover={{y: -10}} className="bg-white p-8 border border-gold-light/20 shadow-sm text-center space-y-4">
                                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto text-2xl">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-lg text-luxury-text">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRODUCT CATEGORIES */}
            <section className="py-24 space-y-32">
                <CategorySection 
                    id="bracelets"
                    title="Customized Gold Bracelets" 
                    desc="Make a statement with our customized name bracelets. Each piece features your name, initials, or special symbols in bold designs."
                    items={bracelets}
                />
                <CategorySection 
                    id="pendants"
                    title="Customized Gold Pendants" 
                    desc="Keep your memories close with photo pendants. Our artisans embed your precious moments into premium gold keepsakes."
                    items={pendants}
                />
                <CategorySection 
                    id="rings"
                    title="Customized Gold Rings" 
                    desc="Design your own for engagements or personal style. Blend traditional craftsmanship with modern aesthetics for your special moments."
                    items={rings}
                />
            </section>

            {/* LIGHTWEIGHT SECTION */}
            <section className="py-24 bg-[#111] text-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-serif text-gold font-bold uppercase tracking-widest">Lightweight Gold Jewelry</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            For those who love elegance without the weight. Designed for daily comfort while maintaining a luxurious feel.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {lightweightItems.map((item, i) => (
                            <motion.div key={i} className="group bg-white/5 p-6 border border-white/10 rounded-sm">
                                <div className="aspect-square overflow-hidden mb-6">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <h4 className="text-gold font-bold text-lg mb-3">{item.name}</h4>
                                <p className="text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY BUY FROM US */}
            <section className="py-24 max-w-7xl mx-auto px-4 lg:px-8 text-center">
                <h2 className="text-3xl font-serif mb-20 uppercase tracking-widest text-luxury-text font-bold">The Santhi Promise</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {whyBuyFromUs.map((item, i) => (
                        <div key={i} className="space-y-4">
                            <div className="text-gold flex justify-center scale-150 mb-6">{item.icon}</div>
                            <h3 className="font-bold uppercase tracking-widest text-sm text-luxury-text">{item.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-[#f8f5f0] text-center border-t border-gold-light/20">
                <div className="max-w-4xl mx-auto px-4 space-y-8">
                    <h2 className="text-4xl font-serif font-bold text-luxury-text">Order Your Gold Customized Jewelry Today</h2>
                    <p className="text-gray-500 tracking-wide">Customize your style with our collection. Each piece tells your story in timeless gold elegance.</p>
                    <button className="bg-gold hover:bg-gold-dark text-white px-12 py-4 font-bold tracking-[0.2em] transition-all uppercase shadow-lg hover:shadow-gold/20">
                        Explore Collection
                    </button>
                </div>
            </section>
        </div>
    );
};

const CategorySection = ({ title, desc, items, id }) => (
    <div id={id} className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6 relative z-10">
            <div className="lg:w-1/2 space-y-4">
                <div className="h-1 w-12 bg-gold"></div>
                <h2 className="text-4xl font-serif font-bold text-luxury-text uppercase">{title}</h2>
                <p className="text-gray-500 font-light leading-relaxed">{desc}</p>
            </div>
            <div className="text-[80px] font-serif font-black text-gray-50 opacity-10 absolute right-8 hidden lg:block select-none -z-10">{title.split(' ').pop()}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {items.map((item, i) => (
                <motion.div key={i} whileHover={{y: -10}} transition={{duration: 0.4}} className="bg-white border border-gray-100 p-4 shadow-sm group">
                    <div className="aspect-[4/5] bg-gray-50 mb-6 overflow-hidden">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="space-y-1">
                        <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">{item.sub}</span>
                        <h4 className="text-luxury-text font-bold tracking-tight uppercase text-lg">{item.name}</h4>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

export default GoldCustomized;
