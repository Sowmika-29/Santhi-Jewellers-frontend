import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ChevronRight, 
    ChevronLeft,
    Award, 
    ShieldCheck, 
    Sparkles, 
    Users, 
    Star, 
    TrendingUp, 
    Heart, 
    ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Magnetic = ({ children }: { children: React.ReactNode }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    const { x, y } = position;

    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

const HeroSlider = () => {
    const slides = [
        {
            image: '/images/showcase/gold_chain_1.webp',
            subtitle: 'Signature Collections • Heritage Artistry',
            title: 'Exquisite Gold Necklaces',
            desc: 'Timeless designs that celebrate tradition and elegance. Handcrafted for your most cherished moments.'
        },
        {
            image: '/images/showcase/gold_4.webp',
            subtitle: 'Daily Luxury • Modern Craftsmanship',
            title: 'Designer Gold Bracelets',
            desc: 'Sophisticated silhouettes designed for the modern woman. Elevate your everyday style with 22K pure gold.'
        },
        {
            image: '/images/showcase/gold_3.webp',
            subtitle: 'Antique Style • Divine Brilliance',
            title: 'Traditional Gold Jhumkas',
            desc: 'Intricate Nagas and Temple jewelry craftsmanship that reflects our rich cultural legacy.'
        }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-[95vh] w-full overflow-hidden bg-stone-900">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <img 
                        src={slides[current].image} 
                        alt="Hero Slide" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 lg:px-8 flex items-center">
                <div className="max-w-3xl text-white">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-maroon-light tracking-[0.5em] uppercase text-xs lg:text-sm font-bold mb-6 block font-serif">
                                {slides[current].subtitle}
                            </span>
                            <h1 className="text-5xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1]">
                                {slides[current].title}
                            </h1>
                            <p className="text-lg lg:text-xl opacity-90 mb-12 font-light max-w-lg leading-relaxed">
                                {slides[current].desc}
                            </p>
                                <div className="flex flex-col sm:flex-row gap-8 items-start">
                                    <Magnetic>
                                        <Link 
                                            to="/category/Gold" 
                                            className="group relative px-12 py-6 bg-maroon text-white font-bold tracking-[0.25em] uppercase transition-all duration-500 flex items-center shadow-[0_20px_40px_-10px_rgba(91,14,35,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] active:scale-95 overflow-hidden"
                                        >
                                            {/* Shine Layer */}
                                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer z-0"></div>
                                            
                                            {/* Border Trace SVG */}
                                            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" fill="none">
                                                <rect 
                                                    x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" 
                                                    className="stroke-[#D4AF37] stroke-[2px] [stroke-dasharray:400,0] group-hover:[stroke-dasharray:0,400] transition-all duration-1000"
                                                    strokeLinecap="square"
                                                />
                                            </svg>

                                            <span className="relative z-20 flex items-center">
                                                Browse Gold <ChevronRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform duration-500" />
                                            </span>
                                        </Link>
                                    </Magnetic>

                                    <Magnetic>
                                        <Link 
                                            to="/gold/customized" 
                                            className="group relative px-12 py-6 border-2 border-white/20 hover:border-[#D4AF37] text-white font-bold tracking-[0.25em] uppercase transition-all duration-500 backdrop-blur-sm active:scale-95 flex items-center bg-white/5 overflow-hidden"
                                        >
                                            {/* Liquid Fill */}
                                            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#D4AF37] to-[#B8860B] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                                            
                                            <span className="relative z-20 group-hover:text-black transition-colors duration-500 flex items-center">
                                                Customization Order <ArrowRight size={20} className="ml-3 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-700" />
                                            </span>
                                        </Link>
                                    </Magnetic>
                                </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-12 right-12 z-20 flex gap-4">
                <button onClick={prevSlide} className="p-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-full backdrop-blur-sm">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} className="p-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-full backdrop-blur-sm">
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, i) => (
                    <button 
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1 transition-all duration-500 rounded-full ${current === i ? 'w-12 bg-maroon' : 'w-4 bg-white/30 hover:bg-white/50'}`}
                    />
                ))}
            </div>
        </section>
    );
};

const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
        className={className}
    >
        {children}
    </motion.div>
);

const Home = () => {
    // Assets & Data
    const goldPlate = '/images/showcase/gold_5.webp'; // Heavy gold haram/articulate piece
    const goldCategoryImg = '/images/showcase/gold_ring_1.webp';
    const silverCategoryImg = '/images/showcase/silver_anklet_1.webp';
    const diamondCategoryImg = '/images/showcase/diamond_ring_1.webp';

    const whyChooseData = [
        { icon: <Award size={36} />, title: 'Legacy of Trust', desc: 'Serving generations with integrity and unmatched purity since 1985.' },
        { icon: <ShieldCheck size={36} />, title: 'BIS Hallmarked', desc: '100% certified gold purity as per international standards for absolute peace of mind.' },
        { icon: <Sparkles size={36} />, title: 'Master Artistry', desc: 'Exquisite handcrafted designs by award-winning artisans reflecting our rich heritage.' },
        { icon: <Users size={36} />, title: 'Client First', desc: 'Personalized service tailored to your unique celebrations, from weddings to everyday wear.' }
    ];

    const lightweightItems = [
        { name: 'Heart Gold Haram', img: '/images/showcase/lightweight_heart_haram.webp', price: 'Lightweight 22K' },
        { name: 'Pure Silver Bangle', img: '/images/showcase/lightweight_silver_bangle.webp', price: 'Everyday Wear' },
        { name: 'Baby Thandai', img: '/images/showcase/lightweight_baby_thandai.webp', price: 'Traditional' }
    ];

    const fashionableItems = [
        { name: 'Fusion Gold Neck Piece', img: '/images/showcase/gold_2.webp', tag: 'TRENDING' },
        { name: 'Oxidized Silver Suite', img: '/images/showcase/silver_3.webp', tag: 'NEW' },
        { name: 'Glamour Diamond Ring', img: '/images/showcase/diamond_ext_1.webp', tag: 'POPULAR' }
    ];

    return (
        <div className="bg-white overflow-hidden font-sans">
            <HeroSlider />

            {/* Signature Collections / Curated Showcase Section */}
            <section className="py-32 max-w-[1440px] mx-auto px-4 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-maroon text-[10px] font-black tracking-[0.4em] uppercase opacity-70">Signature Collections</span>
                        <h2 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 uppercase">Curated Showcase</h2>
                        <div className="h-1 w-24 bg-maroon mx-auto mt-6"></div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <ScrollReveal delay={0.1}>
                        <CategoryCard title="Gold" items="Heritage Jewels" image={goldCategoryImg} link="/category/Gold" />
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <CategoryCard title="Silver" items="Pure Radiance" image={silverCategoryImg} link="/category/Silver" />
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <CategoryCard title="Diamond" items="Luxury Solitaires" image={diamondCategoryImg} link="/category/Diamond" />
                    </ScrollReveal>
                </div>
            </section>

            {/* Features Section - REIMAGINED */}
            <section className="py-32 bg-gradient-to-br from-[#5B0E23] to-[#3D0916] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-24">
                            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.5em] text-xs">Uncompromising Standards</span>
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold mt-4">Why Choose Santhi Jewellers</h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseData.map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <motion.div 
                                    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl h-full flex flex-col items-center text-center group transition-all duration-300"
                                >
                                    <div className="mb-8 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-serif font-bold mb-4 text-white uppercase tracking-wider">{item.title}</h3>
                                    <p className="text-stone-300 text-sm leading-relaxed font-light">{item.desc}</p>
                                    <div className="w-8 h-[2px] bg-[#D4AF37] mt-8 opacity-50 group-hover:w-16 transition-all duration-500"></div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mastering the Fine Art of Gold Section */}
            <section className="py-32 overflow-hidden bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <ScrollReveal className="lg:w-1/2">
                            <div className="relative group">
                                <div className="absolute -inset-4 border border-maroon/10 rounded-2xl z-0 group-hover:inset-0 transition-all duration-700"></div>
                                <img 
                                    src={goldPlate} 
                                    alt="Gold Artistry" 
                                    className="w-full h-[650px] object-cover rounded-xl shadow-2xl relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                                />
                                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-xl z-20 border-l-4 border-maroon">
                                    <p className="text-maroon font-serif font-bold text-2xl tracking-tight">Pure 22K Gold</p>
                                    <p className="text-stone-500 text-xs uppercase tracking-[0.2em] font-bold mt-1">Certified Craftsmanship</p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <div className="lg:w-1/2 space-y-10">
                            <ScrollReveal delay={0.2}>
                                <span className="text-maroon tracking-[0.4em] font-black text-xs uppercase block opacity-70">The Art of Creation</span>
                                <h2 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1]">Mastering The Fine Art Of Gold</h2>
                                <p className="text-stone-500 text-xl leading-relaxed font-light italic mt-8 border-l-4 border-maroon/20 pl-6">
                                    "Every piece at Santhi Jewellers tells a story of meticulous dedication. From the initial hand-drawn sketch to the final laser-precision polish, our master artisans ensure perfection in every silhouette."
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.4}>
                                <div className="pt-10 grid grid-cols-2 gap-12">
                                    <div className="space-y-2">
                                        <h4 className="text-5xl font-serif font-bold text-maroon">100%</h4>
                                        <p className="text-[10px] text-stone-500 uppercase tracking-[0.3em] font-black">Hallmarked Gold</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-5xl font-serif font-bold text-maroon">35+</h4>
                                        <p className="text-[10px] text-stone-500 uppercase tracking-[0.3em] font-black">Years of Legacy</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fashionable Trends Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-24 space-y-6">
                            <TrendingUp className="text-maroon mx-auto w-12 h-12" />
                            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 uppercase">Fashionable Trends</h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">Stay ahead with our most sought-after contemporary pieces that redefine modern luxury.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {fashionableItems.map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="group relative overflow-hidden rounded-[24px] shadow-lg border border-stone-100">
                                    <div className="h-[550px] overflow-hidden">
                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                                        <span className="text-[#D4AF37] font-black text-[10px] tracking-[0.4em] mb-4">{item.tag}</span>
                                        <h4 className="text-3xl font-serif font-bold text-white mb-6 leading-tight">{item.name}</h4>
                                        <Link to="/category/Gold" className="text-white text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2 group/btn border-b border-white/30 pb-2 w-fit">
                                            Explore Suite <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const CategoryCard = ({ title, items, image, link }) => (
    <Link to={link} className="group relative block h-[650px] overflow-hidden rounded-[16px] border border-[#5B0E23]/10 shadow-lg hover:shadow-2xl transition-all duration-700">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-white/5 group-hover:from-white group-hover:via-white/60 transition-all duration-700"></div>
        <div className="absolute bottom-12 left-0 right-0 px-10 text-center">
            <h3 className="text-4xl font-serif font-bold text-[#5B0E23] mb-3 uppercase tracking-wider">{title}</h3>
            <p className="text-stone-500 text-[11px] font-bold tracking-[0.4em] uppercase mb-8 opacity-80">{items}</p>
            <div className="w-12 h-[2px] bg-maroon mx-auto group-hover:w-full transition-all duration-700"></div>
        </div>
    </Link>
);

export default Home;
