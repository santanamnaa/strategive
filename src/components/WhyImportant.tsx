import React from 'react';
import { TrendingUp, Users, Heart, Clock } from 'lucide-react';

const WhyImportant = () => {
  const stats = [
    {
      number: '100M+',
      label: 'Pengguna Aktif',
      description: 'TikTok dan Instagram mencapai lebih dari 100 juta pengguna aktif bulanan di Indonesia',
      icon: Users
    },
    {
      number: '22%',
      label: 'Pertumbuhan Tahunan',
      description: 'Tingkat pertumbuhan year-on-year pengguna kedua platform di Indonesia',
      icon: TrendingUp
    },
    {
      number: '3x',
      label: 'Engagement Rate',
      description: 'Tingkat engagement lebih tinggi dibandingkan platform media sosial lainnya',
      icon: Heart
    },
    {
      number: '52',
      label: 'Menit per Hari',
      description: 'Rata-rata waktu penggunaan per pengguna pada kedua platform',
      icon: Clock
    }
  ];

  const benefits = [
    'Mendorong penjualan langsung',
    'Membangun brand awareness',
    'Menciptakan komunitas pembeli loyal'
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-700 mb-6">
            Kenapa TikTok & Instagram Penting untuk Bisnis Anda?
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Bisnis Anda perlu hadir di platform ini berdasarkan data penjualan di TikTok dan statistik berikut:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-sage-50 rounded-xl card-hover">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-primary-700 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-primary-600 mb-3">{stat.label}</div>
                <p className="text-primary-500 text-sm leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary-700 mb-6">Fakta Penjualan di Indonesia</h3>
            <p className="text-lg text-primary-600 mb-6">
              Berdasarkan data penjualan di TikTok, bisnis dapat melihat <span className="font-semibold text-primary-700">peningkatan konversi hingga 30%</span> dibandingkan kanal digital lainnya, menjadikan TikTok dan Instagram platform utama untuk:
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-primary-600 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img 
              src="/latar.png" 
              alt="Social Media Usage Statistics" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImportant;