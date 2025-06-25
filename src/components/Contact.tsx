import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Kirim email via EmailJS
    emailjs.send(
      'service_jd0scdm', // ganti dengan Service ID dari EmailJS
      'template_mgh47ax', // ganti dengan Template ID dari EmailJS
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      'F6GylhkVsrqroGKC0' // ganti dengan User ID (Public Key) dari EmailJS
    )
    .then((result) => {
      alert('Pesan berhasil dikirim!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, (error) => {
      alert('Gagal mengirim pesan. Silakan coba lagi.');
      console.error(error.text);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-700 mb-6">
            Siap Meningkatkan Brand Anda?
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan mulai transformasi digital bisnis Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-primary-700 mb-8">Hubungi Kami</h3>
            
            <div className="space-y-6 mb-8">
              
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-primary-700">Email</div>
                  <div className="text-primary-600">strategive@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-primary-700">Alamat</div>
                  <div className="text-primary-600">Bandung, Indonesia</div>
                </div>
              </div>
            </div>

            <div className="bg-sage-50 p-6 rounded-xl">
              <h4 className="font-bold text-primary-700 mb-4">Konsultasi Gratis</h4>
              <p className="text-primary-600 mb-4">
                Dapatkan analisis mendalam tentang potensi brand Anda di TikTok dan Instagram
              </p>
              <ul className="text-sm text-primary-600 space-y-2">
                <li>• Audit konten existing</li>
                <li>• Rekomendasi strategi</li>
                <li>• Estimasi ROI</li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="Ceritakan tentang bisnis Anda dan goals yang ingin dicapai..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;