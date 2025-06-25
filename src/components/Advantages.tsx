import React from 'react';
import { Camera, BarChart3, Upload, Gift } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      title: 'Tim Profesional',
      description: 'Didukung oleh videografer dan editor berpengalaman yang memahami algoritma TikTok dan tren terkini.',
      icon: Camera
    },
    {
      title: 'Evaluasi Berkala',
      description: 'Setiap 2 minggu, kami melakukan analisis mendalam terhadap performa konten dan melakukan penyesuaian strategi bila diperlukan.',
      icon: BarChart3
    },
    {
      title: 'Pengelolaan Penuh',
      description: 'Kami menangani seluruh proses, mulai dari perencanaan hingga publikasi, sehingga Anda dapat fokus pada bisnis inti.',
      icon: Upload
    },
    {
      title: 'Bonus Strategi Brand',
      description: 'Dapatkan strategi konten tambahan untuk meningkatkan identitas brand Anda, termasuk panduan penggunaan hashtag dan rekomendasi konten viral sesuai tren pasar.',
      icon: Gift
    },
    {
      title: 'Jaringan KOL Cakep',
      description: 'Akses ke Key Opinion Leader (KOL) yang menarik dan relevan untuk memperkuat kampanye brand Anda.',
      icon: Gift
    }
  ];

  return (
    <section id="advantages" className="bg-sage-50 section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="/latar.png" 
              alt="Professional Team Working" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-700 mb-8">
              Keunggulan
            </h2>
            
            <div className="space-y-8">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div key={index} className="flex gap-6">
                    <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-700 mb-3">
                        {advantage.title}
                      </h3>
                      <p className="text-primary-600 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;