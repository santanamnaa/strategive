import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// Ganti SERVICE_ID, TEMPLATE_ID, dan USER_ID sesuai akun EmailJS kamu
const EMAILJS_SERVICE_ID = 'service_rm7ma0r'; // contoh: service_abc123
const EMAILJS_TEMPLATE_ID = 'template_dtcptkq'; // contoh: template_xyz456
const EMAILJS_USER_ID = 'F6GylhkVsrqroGKC0'; // contoh: F6GylhkVsrqroGKC0

const positions = [
  {
    title: 'Videographer',
    description: 'Bertanggung jawab membuat, merekam, dan mengedit video kreatif untuk kebutuhan digital marketing.',
    requirements: [
      'Siap on-call 09.00 – 17.00 WIB untuk shooting',
      'Menyusun rundown lokasi & urutan shot berdasarkan content plan',
      'Pastikan talent, properti, dan perizinan siap',
      'Menguasai teknis shooting (pencahayaan, komposisi, audio, stabilitas, setting kamera)',
      'Unggah raw ke Notion/Google Drive maksimal 3 jam setelah shooting',
      'Koordinasi dengan Creative Lead & Social Media Specialist',
      'Cek dan rawat peralatan sebelum & sesudah pemakaian',
      'Respons chat grup maksimal 15 menit',
      'Wajib membaca content plan mingguan',
      'Ajukan libur minimal 3 hari sebelumnya',
      'Hasil footage harus tajam, stabil, bebas noise, dan sesuai framing guideline',
    ]
  },
  {
    title: 'Editor',
    description: 'Mengedit video dan foto untuk konten media sosial, memastikan kualitas visual yang tinggi.',
    requirements: [
      'Cek kelengkapan raw dari Kameramen segera setelah diunggah',
      'Konfirmasi jika ada file kurang/corrupt',
      'Edit minimal 5 konten (foto/video pendek) & serahkan ke Social Media Specialist sebelum 00.00 WIB hari yang sama',
      'Terapkan color grading, audio mix, teks, grafik sesuai brand-guide',
      'Pastikan ratio, durasi, dan format cocok dengan platform',
      'Simpan file project & export di Notion/Google Drive dengan struktur folder seragam',
      'Kirim mentahan (project file) ke Social Media Specialist',
      'Diskusi konsep visual dengan Creative Lead & Sosmed sebelum final render',
      'Update status pekerjaan harian di grup',
      'Respons chat & revisi maksimal 15 menit',
      'Wajib memahami content plan detail',
      'Ajukan libur minimal 3 hari sebelumnya',
      'Output harus bebas glitch, transisi halus, warna konsisten brand, audio jernih, dan sesuai brief',
    ]
  },
  {
    title: 'Social Media Specialist',
    description: 'Mengelola akun media sosial, membuat strategi konten, dan meningkatkan engagement.',
    requirements: [
      'WFH, siap dihubungi fleksibel, standby jam 9 pagi',
      'Wajib standby di Zoom jam 9 pagi – 6 sore',
      'Content plan bulanan harus tersedia di Notion dalam 3 hari pertama bulan berjalan',
      'Content plan harus lengkap: nama konten, content pillar, storyboard, referensi, caption, link sound',
      'Konten harus sesuai content pillar dan punya makna/tujuan jelas',
      'Jelaskan storyboard ke kameramen sebelum pengambilan konten',
      'Respons chat grup maksimal 15 menit',
      'Tidak boleh membiarkan Owner mengakhiri percakapan, harus beri respons akhir',
      'Wajib bertanya jika ada kebingungan',
      'Take notes setiap owner berbicara, terutama feedback/revisi',
      'Wajib standby untuk meeting dadakan',
      'Konten siap upload harus sudah QC, revisi segera jika ada',
      'Komunikasikan content plan & tanggal posting ke Owner untuk persetujuan',
      'Upload konten sesuai jadwal, monitoring engagement setelah posting',
      'Laporan mingguan ke Owner H+6 setelah minggu berjalan',
    ]
  }
];

const Careers = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    position: '',
    message: '',
    cv_link: '',
    portfolio_link: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        position: form.position,
        message: form.message,
        cv_link: form.cv_link,
        portfolio_link: form.portfolio_link,
      },
      EMAILJS_USER_ID
    )
    .then(() => {
      setSubmitted(true);
    })
    .catch((err) => {
      setError('Gagal mengirim lamaran. Silakan coba lagi.');
      console.error(err);
    });
  };

  return (
    <div className="min-h-screen bg-sage-50 flex flex-col">
      <header className="bg-primary-700 text-white py-6 sm:py-8 px-2 sm:px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">Karir di Strategive</h1>
        <p className="text-base sm:text-lg">Bergabunglah bersama tim kreatif kami!</p>
      </header>
      <main className="flex-1 container-max px-2 sm:px-4 py-6 sm:py-10 max-w-lg sm:max-w-2xl mx-auto w-full">
        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-primary-700 mb-3 sm:mb-4">Posisi yang Dibutuhkan</h2>
          <ul className="space-y-4 sm:space-y-6">
            {positions.map((pos, idx) => (
              <li key={idx} className="bg-white rounded-xl shadow p-3 sm:p-4">
                <div className="font-semibold text-primary-700 text-base sm:text-lg">{pos.title}</div>
                <div className="text-primary-600 text-xs sm:text-sm mb-1 sm:mb-2">{pos.description}</div>
                <div className="text-primary-700 font-semibold mb-1 text-xs sm:text-sm">Persyaratan:</div>
                <ul className="list-disc list-inside text-primary-600 text-xs sm:text-sm space-y-1">
                  {pos.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-lg sm:text-xl font-bold text-primary-700 mb-3 sm:mb-4">Formulir Lamaran</h2>
          {submitted ? (
            <div className="bg-green-100 text-green-700 p-3 sm:p-4 rounded-lg text-center font-semibold text-sm sm:text-base">Lamaran berhasil dikirim! Kami akan menghubungi Anda jika sesuai kualifikasi.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-white p-3 sm:p-6 rounded-xl shadow">
              {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-2 text-center text-xs sm:text-sm">{error}</div>}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-primary-700 mb-1">Nama Lengkap</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-xs sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-primary-700 mb-1">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-xs sm:text-sm" />
              </div>
              <div>
                <label htmlFor="position" className="block text-xs sm:text-sm font-medium text-primary-700 mb-1">Posisi yang Dilamar</label>
                <select id="position" name="position" value={form.position} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-xs sm:text-sm">
                  <option value="">Pilih posisi</option>
                  {positions.map((pos, idx) => (
                    <option key={idx} value={pos.title}>{pos.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cv_link" className="block text-xs sm:text-sm font-medium text-primary-700 mb-1">Link CV (Google Drive/Dropbox, PDF/DOC)</label>
                <input type="url" id="cv_link" name="cv_link" value={form.cv_link} onChange={handleChange} required placeholder="https://drive.google.com/...." className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-xs sm:text-sm" />
              </div>
              <div>
                <label htmlFor="portfolio_link" className="block text-xs sm:text-sm font-medium text-primary-700 mb-1">Link Portofolio (Google Drive/Website/Behance, dll)</label>
                <input type="url" id="portfolio_link" name="portfolio_link" value={form.portfolio_link} onChange={handleChange} required placeholder="https://..." className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-xs sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-primary-700 mb-1">Pesan / Motivasi</label>
                <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-xs sm:text-sm" placeholder="Ceritakan kenapa Anda cocok untuk posisi ini..." required></textarea>
              </div>
              <button type="submit" className="w-full btn-primary text-xs sm:text-base py-2 sm:py-3">Kirim Lamaran</button>
            </form>
          )}
        </section>
      </main>
    </div>
  );
};

export default Careers; 