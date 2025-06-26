import React from 'react';
import { FaTiktok } from 'react-icons/fa';
import { Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-700 text-white section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary-700 font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">STRATEGIVE</span>
            </div>
            <p className="text-sage-200 mb-4">
              Agency kreatif yang fokus pada strategi digital untuk TikTok dan Instagram
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/Strategive"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Instagram Strategive"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@strategive?lang=id-id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="TikTok Strategive"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sage-200">
              <li><a href="#" className="hover:text-white transition-colors">TikTok Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Content Creation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Media Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sage-200">
              <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimoni</a></li>
            <li><a href="/careers" className="hover:text-white transition-colors">Karir</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <div className="space-y-3 text-sage-200">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>strategive@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-600 pt-8 text-center text-sage-200">
          <p>&copy; 2024 Strategive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;