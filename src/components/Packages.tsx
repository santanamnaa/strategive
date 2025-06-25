import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: 'Paket TikTok Premium',
      price: 'Rp4.000.000',
      period: '/bulan',
      icon: Star,
      features: [
        '20 video konten berkualitas tinggi',
        'Konsultasi strategi konten',
        'Garansi minimum views'
      ],
      popular: false
    },
    {
      name: 'Paket Instagram Feed',
      price: 'Rp3.500.000',
      period: '/bulan',
      icon: Crown,
      features: [
        '20 konten feed profesional',
        'Editing & caption menarik',
        'Bonus 4 Instagram Story'
      ],
      popular: false
    },
    {
      name: 'Paket Kombo Hemat',
      price: 'Rp7.500.000',
      period: '/bulan',
      icon: Zap,
      features: [
        'Semua layanan TikTok & IG',
        'Strategi terintegrasi',
        'Laporan performa bulanan'
      ],
      popular: true,
      discount: '30%'
    }
  ];

  return (
    <section id="packages" className="bg-sage-50 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-700 mb-6">
            Paket Harga Premium
          </h2>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-full h-2 bg-primary-600 rounded-full" style={{width: '200px'}}></div>
              <span className="text-primary-700 font-semibold">100%</span>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary-700">Garansi Kepuasan</div>
              <p className="text-primary-600 text-sm">Jaminan hasil yang sesuai dengan kebutuhan brand Anda</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-full h-2 bg-primary-400 rounded-full" style={{width: '200px'}}></div>
              <span className="text-primary-700 font-semibold">30%</span>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary-700">Diskon Paket Bundling</div>
              <p className="text-primary-600 text-sm">Hemat hingga 30% dengan memilih paket TikTok + Instagram</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg card-hover ${
                pkg.popular ? 'ring-2 ring-primary-600 scale-105' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Paling Populer
                    </div>
                  </div>
                )}
                {pkg.discount && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold">
                    -{pkg.discount}
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-700 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-primary-700">{pkg.price}</span>
                    <span className="text-primary-500">{pkg.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="text-primary-600 flex-shrink-0" size={20} />
                      <span className="text-primary-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full py-4 rounded-lg font-semibold text-center transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-primary-600 text-white hover:bg-primary-700' 
                      : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                  }`}
                >
                  Pilih Paket
                </a>
              </div>
            );
          })}
        </div>

        <div className="bg-primary-700 text-white p-6 rounded-xl text-center">
          <p className="text-lg">
            Semua paket termasuk layanan konsultasi awal, revisi konten (maksimal 2x), dan laporan analitik performa di akhir bulan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;