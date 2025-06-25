import React from 'react';

const portfolioItems = [
  {
    title: 'Blux Jewellery',
    image: '/client/blux.jpeg',
    description: 'Brand perhiasan dengan strategi branding visual premium dan konten elegan.',
  },
  {
    title: 'Klinik Halimah',
    image: '/client/klinik.jpg',
    description: 'Klinik kesehatan dengan kampanye digital dan edukasi kesehatan di media sosial.',
  },
  {
    title: 'Nomora',
    image: '/client/nomora.jpeg',
    description: 'Nomora Cafe dengan pendekatan konten kreatif dan storytelling visual.',
  },
  {
    title: 'Suma Barber',
    image: '/client/suma.jpeg',
    description: 'Barbershop modern dengan strategi promosi dan engagement komunitas.',
  },
  {
    title: 'Tide',
    image: '/client/tide.jpeg',
    description: 'Brand Haircare dengan desain visual unik dan kampanye digital inovatif.',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-700 mb-4">Portfolio</h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Beberapa project dan brand yang telah kami bantu tumbuh melalui strategi digital kreatif.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-primary-100 to-sage-100 rounded-full shadow-lg group-hover:shadow-2xl transition-all duration-300 flex items-center justify-center overflow-hidden mb-6 scale-100 group-hover:scale-105">
                <img src={item.image} alt={item.title} className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-full border-4 border-white shadow-inner" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary-700 mb-2 text-center">{item.title}</h3>
              <p className="text-primary-600 text-center text-sm md:text-base max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 