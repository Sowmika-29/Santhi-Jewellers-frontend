import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Target, 
  Eye, 
  ChevronRight, 
  Brush, 
  Hammer, 
  Microscope, 
  PackageCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ZoomReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1], // Custom bounce-out ease
      delay 
    }}
  >
    {children}
  </motion.div>
);

const About = () => {
  const steps = [
    { icon: <Brush size={32} />, title: "The Vision", desc: "Design & Sketching" },
    { icon: <Hammer size={32} />, title: "Mastering", desc: "Handcrafting & Smelting" },
    { icon: <Microscope size={32} />, title: "Precision", desc: "Quality & Purity Check" },
    { icon: <PackageCheck size={32} />, title: "Heritage", desc: "The Final Masterpiece" }
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110">
          <img 
            src="/images/showcase/custom_hero.webp" 
            alt="About Santhi Jewellers" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5B0E23] via-[#5B0E23]/70 to-[#5B0E23]/30"></div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20 pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full text-white">
          <motion.div
            initial={{ opacity: 0, scale: 1.1, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="text-[#D4AF37] font-bold tracking-[0.5em] uppercase text-xs lg:text-sm mb-6 block drop-shadow-md">Our Legacy</span>
            <h1 className="text-6xl lg:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-lg">About Us</h1>
            <p className="text-xl lg:text-3xl font-light opacity-90 italic border-l-4 border-[#D4AF37] pl-8 leading-relaxed">
              "Crafting timeless elegance and preserving heritage since 1985."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. BRAND STORY SECTION - TINTED BACKGROUND */}
      <section className="py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 space-y-10">
              <ZoomReveal>
                <span className="text-maroon font-bold tracking-[0.3em] uppercase text-xs">Generation of Trust</span>
                <h2 className="text-5xl lg:text-6xl font-serif font-bold text-[#5B0E23] leading-tight mt-2">A Journey of Purity, Passion & Perfection</h2>
                <div className="h-1.5 w-24 bg-[#D4AF37] mt-6"></div>
              </ZoomReveal>
              <ZoomReveal delay={0.2}>
                <div className="space-y-8 text-stone-600 leading-relaxed text-lg lg:text-xl font-light">
                  <p>
                    For over three decades, Santhi Jewellers has been a sanctuary for those who seek more than just jewelry—they seek art. Since 1985, our commitment to purity and traditional craftsmanship has remained unwavering.
                  </p>
                  <p>
                    What started as a small family venture has blossomed into a trusted name, serving generations with integrity. Each piece in our collection is a testament to our master artisans, who breathe life into gold and silver using techniques passed down through centuries.
                  </p>
                  <p className="font-serif italic font-medium text-[#5B0E23] text-2xl border-l-2 border-maroon/20 pl-6 py-2">
                    "We don't just sell jewelry; we celebrate the milestones of your life."
                  </p>
                </div>
              </ZoomReveal>
            </div>
            <div className="lg:w-1/2 relative">
              <ZoomReveal delay={0.3}>
                <motion.div 
                   animate={{ y: [0, -15, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="relative z-10"
                >
                  <div className="absolute -inset-4 border-2 border-maroon/5 rounded-[32px] z-0"></div>
                  <img 
                    src="/images/showcase/gold_5.webp" 
                    alt="Our Heritage" 
                    className="w-full h-[650px] object-cover rounded-[24px] shadow-[0_32px_64px_-16px_rgba(91,14,35,0.2)] relative z-10" 
                  />
                  <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-maroon/5 hidden lg:block">
                     <p className="text-maroon font-serif font-bold text-3xl">Purity Guaranteed</p>
                     <p className="text-stone-400 text-[10px] tracking-[0.2em] font-bold uppercase mt-1">Certified Craftsmanship</p>
                  </div>
                </motion.div>
              </ZoomReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION - DARK MAROON TINT */}
      <section className="py-32 bg-[#5B0E23] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <ZoomReveal>
            <motion.div 
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md p-14 rounded-[32px] border border-white/10 group transition-all duration-700 hover:bg-white/10"
            >
              <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-10 group-hover:bg-[#D4AF37] group-hover:text-maroon transition-all duration-500 shadow-xl">
                <Target size={40} />
              </div>
              <h3 className="text-4xl font-serif font-bold text-white mb-6 uppercase tracking-wider">Our Mission</h3>
              <p className="text-stone-300 leading-relaxed font-light text-xl">
                To bridge the gap between ancient artistry and modern design, ensuring every customer walks away with a piece that is as authentic as it is timeless. We strive for transparency in every transaction.
              </p>
            </motion.div>
          </ZoomReveal>

          <ZoomReveal delay={0.2}>
            <motion.div 
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md p-14 rounded-[32px] border border-white/10 group transition-all duration-700 hover:bg-white/10"
            >
              <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-10 group-hover:bg-[#D4AF37] group-hover:text-maroon transition-all duration-500 shadow-xl">
                <Eye size={40} />
              </div>
              <h3 className="text-4xl font-serif font-bold text-white mb-6 uppercase tracking-wider">Our Vision</h3>
              <p className="text-stone-300 leading-relaxed font-light text-xl">
                To be the global benchmark for luxury handcrafted jewelry, recognized for our unwavering dedication to ethical sourcing, artisan empowerment, and the preservation of heritage Indian craftsmanship.
              </p>
            </motion.div>
          </ZoomReveal>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <ZoomReveal>
            <span className="text-maroon font-bold tracking-[0.4em] uppercase text-xs">Service Excellence</span>
            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-[#5B0E23] mt-4 mb-24 uppercase tracking-widest leading-tight">The Pillars of Santhi</h2>
          </ZoomReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Award size={40} />, title: "Certified Purity", desc: "100% BIS Hallmarked gold and certified diamonds for absolute trust." },
              { icon: <Sparkles size={40} />, title: "Exquisite Artistry", desc: "Every curve and detail is meticulously handcrafted by award-winning artisans." },
              { icon: <ShieldCheck size={40} />, title: "Trusted Legacy", desc: "A family-run institution serving our community with integrity since 1985." },
              { icon: <Users size={40} />, title: "Bespoke Care", desc: "From custom orders to restoration, we put your happiness at the center." }
            ].map((item, i) => (
              <ZoomReveal key={i} delay={i * 0.1}>
                <div className="p-10 space-y-6 group hover:bg-stone-50 rounded-[24px] transition-colors duration-500">
                  <div className="text-[#D4AF37] mx-auto w-fit group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                  <h4 className="text-xl font-bold uppercase tracking-widest text-[#5B0E23]">{item.title}</h4>
                  <p className="text-stone-500 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ZoomReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CRAFTSMANSHIP PROCESS SECTION - CHARCOAL SHOWCASE BACKGROUND */}
      <section className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <ZoomReveal>
            <div className="text-center mb-28">
              <span className="text-[#D4AF37] font-bold uppercase tracking-[0.5em] text-xs">Behind The Masterpiece</span>
              <h2 className="text-5xl lg:text-7xl font-serif font-bold mt-4 drop-shadow-sm text-white">The Art of Creation</h2>
              <div className="h-1.5 w-32 bg-[#D4AF37] mx-auto mt-8"></div>
            </div>
          </ZoomReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0"></div>
            
            {steps.map((step, i) => (
              <ZoomReveal key={i} delay={i * 0.15}>
                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-28 h-28 bg-[#D4AF37] text-maroon rounded-full flex items-center justify-center border-4 border-[#5B0E23] shadow-2xl mb-10 group-hover:bg-white group-hover:text-maroon transition-all duration-700 cursor-default scale-110">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 uppercase tracking-wider text-[#D4AF37]">{step.title}</h3>
                  <p className="text-white/70 text-[11px] font-bold uppercase tracking-widest">{step.desc}</p>
                </div>
              </ZoomReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-16 relative z-10">
          <ZoomReveal>
            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-[#5B0E23] leading-tight drop-shadow-sm">Begin Your Legacy With Us</h2>
          </ZoomReveal>
          <ZoomReveal delay={0.2}>
            <p className="text-2xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed italic">
              Step into a world of curated brilliance. Whether it's for a wedding or daily luxury, we have the perfect piece waiting for you.
            </p>
          </ZoomReveal>
          <ZoomReveal delay={0.3}>
            <Link 
              to="/category/Gold" 
              className="relative inline-flex items-center gap-6 bg-maroon text-white px-14 py-7 rounded-full font-bold tracking-[0.3em] shadow-[0_20px_40px_-10px_rgba(91,14,35,0.4)] hover:bg-[#3D0916] transition-all group overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <span className="relative z-10 uppercase">EXPLORE COLLECTIONS</span> 
              <ChevronRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </ZoomReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
