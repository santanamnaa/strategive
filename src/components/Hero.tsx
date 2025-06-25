import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="gradient-bg min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h1 className="text-7xl lg:text-8xl font-bold leading-tight mb-20">
              <span className="text-sage-500">STRATE</span>
              <span >GIVE</span>
              <div>
              <span>AGENCY</span>
                </div>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={() => window.location.href = '#contact'} className="btn-primary flex items-center justify-center gap-2 group">
                Mulai Sekarang
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/hero1.png" 
                alt="Digital Strategy Team" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-sage-300/30 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;