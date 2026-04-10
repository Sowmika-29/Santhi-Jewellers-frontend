import { MapPin, Phone, Mail } from 'lucide-react';
import { Instagram, Twitter } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-[#f8f5f0] pt-20 pb-10 border-t border-gold-light/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-6">
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold text-gold-dark tracking-tighter leading-none">
              SANTHI
            </span>
            <span className="text-[10px] tracking-[0.3em] font-medium text-luxury-accent -mt-0.5">
              JEWELLERS
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Crafting timeless legacies since 1985. Experience the epitome of luxury and tradition with our certified gold and diamond collections.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Collections</h4>
          <ul className="space-y-4 text-sm text-gray-600">
            <li><a href="/gold" className="hover:text-gold transition-colors">Gold Necklaces</a></li>
            <li><a href="/diamond" className="hover:text-gold transition-colors">Diamond Rings</a></li>
            <li><a href="/silver" className="hover:text-gold transition-colors">Silver Articles</a></li>
            <li><a href="/collections/haram" className="hover:text-gold transition-colors">Temple Haram</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Information</h4>
          <ul className="space-y-4 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gold transition-colors">Our Heritage</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Gold Rate Chart</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Hallmarking Policy</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Shipping & Returns</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>123 Jewellery Lane, High Street, Hyderabad, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>support@santhijewellers.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-20 pt-8 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Santhi Jewellers. All rights reserved. • Hallmark Certified • GST Registered
        </p>
      </div>
    </footer>
  );
};

export default Footer;
