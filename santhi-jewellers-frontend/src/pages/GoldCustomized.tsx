import React from 'react';
import { motion } from 'framer-motion';
import { Star, Gift, Sparkles, Scroll, ShieldCheck, Clock, CheckCircle2, Heart, Award, ArrowRight } from 'lucide-react';

const GoldCustomized = () => {
    // Specialized Data for this page
    const whyChoose = [
        { icon: <Sparkles className="text-amber-500" />, title: 'Express Your Style', desc: 'Transform your names, initials, or special dates into wearable art.'},
        { icon: <Gift className="text-amber-500" />, title: 'Gift Something Special', desc: 'Create meaningful gifts for weddings, birthdays, and anniversaries.'},
        { icon: <Star className="text-amber-500" />, title: 'Own a Unique Piece', desc: 'One-of-a-kind designs handcrafted with precision and 22K gold.'},
        { icon: <Scroll className="text-amber-500" />, title: 'Celebrate Traditions', desc: 'Blending timeless heritage craftsmanship with modern personalization.'},
    ];

    const whyBuyFromUs = [
        { icon: <Award size={28} />, title: 'Expert Craftsmanship', desc: 'Decades of experience in traditional and modern jewellery making.'},
        { icon: <CheckCircle2 size={28} />, title: 'Premium Quality', desc: 'BIS Hallmarked gold and high-grade silver for lasting brilliance.'},
        { icon: <ShieldCheck size={28} />, title: 'Secure Ordering', desc: 'Confidential custom designs and safe transaction processes.'},
        { icon: <Clock size={28} />, title: 'Timely Delivery', desc: 'Committed schedules to ensure your jewelry arrives for your special day.'},
    ];

    const nameBracelets = [
        { name: 'Classic Script Name', img: '/images/showcase/custom_name_bracelet.webp' },
        { name: 'Initial Link Bracelet', img: '/images/showcase/custom_name_bracelet.webp' },
        { name: 'Cursive Signature Band', img: '/images/showcase/custom_name_bracelet.webp' },
    ];

    const menWomenBracelets = [
        { name: 'Men\'s Bold Engraved', img: '/images/showcase/custom_men_bracelet.webp' },
        { name: 'Heritage Men\'s Band', img: '/images/showcase/custom_men_bracelet.webp' },
        { name: 'Unity Custom Cuff', img: '/images/showcase/custom_men_bracelet.webp' },
    ];

    const pendants = [
        { name: 'Oval Photo Locket', img: '/images/showcase/custom_photo_pendant.webp', sub: 'PHOTO PENDANTS' },
        { name: 'Classic Memory Pendant', img: '/images/showcase/custom_photo_pendant.webp', sub: 'PHOTO PENDANTS' },
        { name: 'Heart Photo Keepsake', img: '/images/showcase/custom_photo_pendant.webp', sub: 'PHOTO PENDANTS' },
    ];

    const rings = [
        { name: 'Date Engraved Ring', img: '/images/showcase/custom_ring_1.webp', sub: 'ENGAGEMENT/CUSTOM' },
        { name: 'Initial Gold Band', img: '/images/showcase/custom_ring_1.webp', sub: 'ENGAGEMENT/CUSTOM' },
        { name: 'Custom Solitaire', img: '/images/showcase/custom_ring_1.webp', sub: 'ENGAGEMENT/CUSTOM' },
    ];

    const lightweightItems = [
        { name: 'Heart Haram', desc: 'Delicate 22K gold chain with elegant heart motifs.', img: '/images/showcase/lightweight_heart_haram.webp' },
        { name: 'Silver Bangle', desc: 'Hand-finished premium silver for everyday sophistication.', img: '/images/showcase/lightweight_silver_bangle.webp' },
        { name: 'Baby Anklet (Thandai)', desc: 'Comfortable and safe silverware for your little ones.', img: '/images/showcase/lightweight_baby_thandai.webp' }
    ];

    return (
        <div className="bg-white font-sans overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative h-[70vh] flex items-center justify-center text-center">
                <div className="absolute inset-0 z-0">
                    <img src="/images/showcase/custom_hero.webp" className="w-full h-full object-cover" alt="Gold Customized Jewelry" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
                </div>
                <div className="relative z-10 max-w-5xl px-4 text-white">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-amber-400 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                    >
                        Bespoke Creations
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-7xl font-serif font-bold leading-tight mb-8"
                    >
                        Gold Customized Jewelry – <br className="hidden lg:block" /> Bracelets, Rings & Pendants
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg lg:text-xl text-gray-200 font-light max-w-2xl mx-auto"
                    >
                        Experience the perfect blend of traditional craftsmanship and modern personalization. Every piece is a unique masterpiece crafted exclusively for you.
                    </motion.p>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
                    <div className="w-px h-16 bg-gradient-to-b from-amber-400 to-transparent"></div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-24 max-w-5xl mx-auto px-4 text-center">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative p-10 lg:p-16 border-x border-amber-400/20"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6">
                        <Heart className="text-amber-400 w-8 h-8" />
                    </div>
                    <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-serif italic">
                        "Customized gold jewelry allows you to transform your most cherished moments into timeless treasures. Our master artisans combine heritage techniques with your personal vision to create jewelry that speaks your unique language of elegance."
                    </p>
                </motion.div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">Why Choose Customized Jewelry?</h2>
                        <div className="h-1 w-24 bg-amber-400 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChoose.map((item, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:border-amber-400/50 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-stone-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRODUCT CATEGORIES */}
            <section className="py-32 space-y-40">
                {/* BRACELETS */}
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-20">
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">Customized Gold Bracelets</h2>
                        <p className="text-gray-600 text-lg max-w-3xl font-light">
                            Make a bold statement with our range of personalized bracelets. Whether it's your name in golden script or a rugged band for men, we craft it to perfection.
                        </p>
                    </div>
                    
                    <div className="space-y-20">
                        {/* Name Bracelets Sub-grid */}
                        <div>
                            <h3 className="text-xl font-bold tracking-[0.2em] text-amber-500 uppercase border-b border-stone-100 pb-4 mb-10">1. Name Bracelets</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {nameBracelets.map((item, i) => <ProductCard key={i} item={item} />)}
                            </div>
                        </div>
                        
                        {/* Men & Women Sub-grid */}
                        <div>
                            <h3 className="text-xl font-bold tracking-[0.2em] text-amber-500 uppercase border-b border-stone-100 pb-4 mb-10">2. Bracelets for Men & Women</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {menWomenBracelets.map((item, i) => <ProductCard key={i} item={item} />)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* PENDANTS */}
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">Customized Gold Pendants</h2>
                            <p className="text-gray-600 text-lg font-light">
                                Cherish your memories with our photo pendants and custom engravings. The perfect way to keep your loved ones close to your heart.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {pendants.map((item, i) => <ProductCard key={i} item={item} />)}
                    </div>
                </div>

                {/* RINGS */}
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 text-right lg:text-left">
                        <div className="lg:w-full">
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">Customized Gold Rings</h2>
                            <p className="text-gray-600 text-lg font-light max-w-3xl">
                                From dream engagement rings to personalized daily bands, we bring your vision to life with exceptional detail and quality.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {rings.map((item, i) => <ProductCard key={i} item={item} />)}
                    </div>
                </div>
            </section>

            {/* LIGHTWEIGHT SECTION */}
            <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-[100px] rounded-full -mr-48 -mt-48"></div>
                <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-amber-400 font-bold uppercase tracking-widest text-sm">Everyday Elegance</span>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold">Lightweight Gold Jewelry</h2>
                        <div className="h-1 w-20 bg-amber-400 mx-auto mt-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {lightweightItems.map((item, i) => (
                            <motion.div 
                                key={i} 
                                whileHover={{ y: -10 }}
                                className="group bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
                            >
                                <div className="aspect-square overflow-hidden rounded-xl mb-8">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <h4 className="text-2xl font-serif font-bold text-amber-400 mb-4">{item.name}</h4>
                                <p className="text-stone-400 leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY BUY FROM US */}
            <section className="py-32 max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4 uppercase tracking-[0.2em]">Why Buy From Us?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {whyBuyFromUs.map((item, i) => (
                        <div key={i} className="text-center space-y-6">
                            <div className="text-amber-500 flex justify-center">{item.icon}</div>
                            <h3 className="font-bold text-lg text-gray-900 uppercase tracking-widest">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-stone-50 border-y border-stone-200">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">Order Your Gold Customized Jewelry Today</h2>
                    <p className="text-gray-600 text-lg font-light tracking-wide">
                        Let us help you create a piece that lasts forever. Contact our jewelry experts to start your customization journey.
                    </p>
                    <div className="pt-6">
                        <button className="bg-stone-900 hover:bg-black text-white px-10 py-5 font-bold tracking-[0.2em] transition-all uppercase flex items-center gap-4 mx-auto group shadow-xl hover:shadow-2xl">
                            Explore Collection <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ProductCard = ({ item }) => (
    <motion.div 
        whileHover={{ y: -10 }} 
        className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500"
    >
        <div className="aspect-[4/5] overflow-hidden relative">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-between">
                <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    View Details <ArrowRight size={14} />
                </span>
            </div>
        </div>
        <div className="p-8">
            {item.sub && <span className="text-[10px] text-amber-500 font-bold tracking-[0.2em] uppercase mb-2 block">{item.sub}</span>}
            <h4 className="text-xl font-serif font-bold text-gray-900 group-hover:text-amber-600 transition-colors uppercase">{item.name}</h4>
        </div>
    </motion.div>
);

export default GoldCustomized;

