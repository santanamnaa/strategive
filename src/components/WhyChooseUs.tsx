import React from 'react';
import { Star, Crown, TrendingUp, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const comparisons = [
    {
      title: 'Agency Konvensional',
      icon: Star,
      points: [
        'Pendekatan generik untuk semua platform',
        'Konten berulang tanpa strategi khusus',
        'Laporan performa minimal'
      ],
      color: 'text-gray-500'
    },
    {
      title: 'Layanan Kami',
      icon: Crown,
      points: [
        'Fokus khusus pada TikTok & Instagram',
        'Konten kreatif yang disesuaikan dengan algoritma terbaru',
        'Laporan analitik mendalam dengan rekomendasi'
      ],
      color: 'text-primary-600'
    },
    {
      title: 'Hasil Nyata',
      icon: TrendingUp,
      points: [
        'Pertumbuhan followers 2-3x lebih cepat',
        'Engagement rate rata-rata 15% lebih tinggi',
        'ROI terukur dengan jelas'
      ],
      color: 'text-green-600'
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-700 mb-6">
            Kenapa Memilih Kami Dibanding Agency Lain?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {comparisons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative">
                <div className={`bg-sage-50 p-8 rounded-xl card-hover ${
                  index === 1 ? 'ring-2 ring-primary-600 bg-primary-50' : ''
                }`}>
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      index === 1 ? 'bg-primary-600' : 'bg-gray-400'
                    }`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className={`text-xl font-bold ${item.color}`}>{item.title}</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className={`text-sm ${item.color}`}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-primary-400" size={24} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-primary-700 text-white p-8 rounded-xl">
          <div className="flex items-start gap-4">
            <div className="w-1 h-16 bg-primary-400 rounded-full flex-shrink-0"></div>
            <div>
              <p className="text-lg leading-relaxed">
                Kami tidak hanya menawarkan konten, tapi strategi komprehensif yang telah terbukti meningkatkan performa brand di platform yang 
                paling relevan saat ini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;