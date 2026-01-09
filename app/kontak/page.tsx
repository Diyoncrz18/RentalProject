'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  { question: "Apa saja dokumen yang diperlukan untuk menyewa mobil?", answer: "Anda memerlukan KTP, SIM A yang masih berlaku, dan deposit sesuai dengan jenis mobil yang disewa." },
  { question: "Apakah tersedia layanan antar-jemput mobil?", answer: "Ya, kami menyediakan layanan antar-jemput mobil ke lokasi Anda dengan biaya tambahan sesuai jarak." },
  { question: "Berapa minimal durasi penyewaan?", answer: "Minimal durasi penyewaan adalah 1 hari (24 jam). Kami juga menyediakan paket mingguan dan bulanan dengan harga lebih hemat." },
  { question: "Apakah mobil sudah termasuk asuransi?", answer: "Ya, semua mobil kami sudah dilengkapi dengan asuransi komprehensif untuk keamanan Anda selama berkendara." },
  { question: "Bagaimana cara pembayaran sewa mobil?", answer: "Pembayaran dapat dilakukan melalui transfer bank, e-wallet, atau tunai. Pembayaran DP minimal 50% saat pemesanan." },
];

export default function KontakPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <h1><i className="fas fa-envelope"></i> Hubungi Kami</h1>
        <p>Kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami untuk pertanyaan atau pemesanan.</p>
        <div className="breadcrumb">
          <Link href="/">Beranda</Link>
          <span>/</span>
          <span>Kontak</span>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards-section">
        <div className="contact-cards-container">
          <div className="contact-card">
            <div className="contact-card-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h4>Alamat</h4>
            <p>Jl. Raya Utama No. 123<br />Jakarta Selatan</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h4>Telepon</h4>
            <p><a href="tel:+6281344155598">+62 813-4415-5598</a></p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h4>Email</h4>
            <p><a href="mailto:info@sinarrent.com">info@sinarrent.com</a></p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h4>Jam Operasional</h4>
            <p>Senin - Minggu<br />08:00 - 21:00</p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Kirim Pesan kepada Kami</h2>
            <p>Ada pertanyaan atau ingin melakukan pemesanan? Isi form di samping dan tim kami akan segera menghubungi Anda.</p>
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="info-content">
                  <h5>Alamat Kantor</h5>
                  <p>Jl. Raya Utama No. 123, Jakarta Selatan, Indonesia 12345</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><i className="fas fa-phone"></i></div>
                <div className="info-content">
                  <h5>Telepon/WhatsApp</h5>
                  <p>+62 813-4415-5598</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><i className="fas fa-envelope"></i></div>
                <div className="info-content">
                  <h5>Email</h5>
                  <p>info@sinarrent.com</p>
                </div>
              </div>
            </div>
            <div className="social-section">
              <h4>Ikuti Kami</h4>
              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <h3>Formulir Kontak</h3>
            <p>Isi detail Anda dan kami akan segera menghubungi Anda.</p>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>Nama Lengkap</label>
                  <input type="text" placeholder="Masukkan nama Anda" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="email@example.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Telepon</label>
                  <input type="tel" placeholder="08xx-xxxx-xxxx" />
                </div>
                <div className="form-group">
                  <label>Layanan</label>
                  <select>
                    <option>Pilih Layanan</option>
                    <option>Sewa Harian</option>
                    <option>Sewa Mingguan</option>
                    <option>Sewa Bulanan</option>
                    <option>Dengan Driver</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Pesan</label>
                <textarea rows={5} placeholder="Tuliskan pesan atau pertanyaan Anda..."></textarea>
              </div>
              <button type="submit" className="btn-submit">
                <i className="fas fa-paper-plane"></i>
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-header">
            <h2>Lokasi Kami</h2>
            <p>Kunjungi kantor kami atau hubungi untuk layanan antar-jemput</p>
          </div>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666775055404!2d106.82704831476915!3d-6.175393995529882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1635916893987!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Pertanyaan yang Sering Diajukan</h2>
            <p>Temukan jawaban atas pertanyaan umum seputar layanan kami</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <h4>{faq.question}</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Butuh Bantuan Segera?</h2>
        <p>Tim kami siap membantu Anda 24 jam sehari, 7 hari seminggu.</p>
        <div className="cta-buttons">
          <a href="tel:+6281344155598" className="btn-primary">
            <i className="fas fa-phone"></i>
            Telepon Sekarang
          </a>
          <a href="https://wa.me/6281344155598" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <i className="fab fa-whatsapp"></i>
            Chat WhatsApp
          </a>
        </div>
      </section>

      <style jsx>{`
        .page-header {
          padding: 150px 5% 80px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .page-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></svg>');
          background-size: 50px 50px;
          pointer-events: none;
        }

        .page-header h1 {
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          position: relative;
        }

        .page-header p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.15rem;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
        }

        .breadcrumb {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          position: relative;
        }

        .breadcrumb :global(a) {
          color: #ffffff;
          text-decoration: none;
        }

        .contact-cards-section {
          padding: 0 5%;
          margin-top: -50px;
          position: relative;
          z-index: 10;
        }

        .contact-cards-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .contact-card {
          background: var(--bg-white);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: var(--shadow-xl);
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }

        .contact-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .contact-card-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.25);
        }

        .contact-card-icon :global(i) {
          font-size: 1.75rem;
          color: #ffffff;
        }

        .contact-card h4 {
          font-size: 1.1rem;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        .contact-card p {
          color: var(--text-medium);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .contact-card a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
        }

        .contact-main {
          padding: 80px 5%;
          background: var(--bg-white);
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
        }

        .contact-info h2 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 1rem;
        }

        .contact-info > p {
          color: var(--text-medium);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .info-icon {
          width: 50px;
          height: 50px;
          background: var(--bg-light);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-icon :global(i) {
          font-size: 1.25rem;
          color: var(--primary);
        }

        .info-content h5 {
          font-size: 1rem;
          color: var(--secondary);
          margin-bottom: 0.25rem;
        }

        .info-content p {
          color: var(--text-medium);
          font-size: 0.9rem;
        }

        .social-section h4 {
          font-size: 1.1rem;
          color: var(--secondary);
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: var(--bg-light);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-medium);
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }

        .social-link:hover {
          background: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
          transform: translateY(-3px);
        }

        .contact-form-wrapper {
          background: var(--bg-light);
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid var(--border-color);
        }

        .contact-form-wrapper h3 {
          font-size: 1.5rem;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        .contact-form-wrapper > p {
          color: var(--text-medium);
          margin-bottom: 2rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 1rem 1.25rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          background: var(--bg-white);
          color: var(--text-dark);
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }

        .form-group textarea {
          resize: none;
        }

        .btn-submit {
          width: 100%;
          background: var(--primary);
          color: #ffffff;
          padding: 1rem 2rem;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: inherit;
        }

        .btn-submit:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
        }

        .map-section {
          padding: 80px 5%;
          background: var(--bg-light);
        }

        .map-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .map-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .map-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        .map-header p {
          color: var(--text-medium);
        }

        .map-wrapper {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--border-color);
        }

        .faq-section {
          padding: 80px 5%;
          background: var(--bg-white);
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        .faq-header p {
          color: var(--text-medium);
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: var(--bg-light);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: var(--primary);
        }

        .faq-question {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .faq-question h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--secondary);
        }

        .faq-question :global(i) {
          color: var(--primary);
          transition: transform 0.3s ease;
        }

        .faq-item.active .faq-question :global(i) {
          transform: rotate(180deg);
        }

        .faq-answer {
          padding: 0 1.5rem;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item.active .faq-answer {
          padding: 0 1.5rem 1.5rem;
          max-height: 200px;
        }

        .faq-answer p {
          color: var(--text-medium);
          line-height: 1.7;
        }

        .cta-section {
          padding: 80px 5%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          text-align: center;
        }

        .cta-section h2 {
          color: #ffffff;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .cta-section p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-section :global(.btn-primary) {
          background: #ffffff;
          color: var(--primary);
        }

        .btn-whatsapp {
          background: #25D366;
          color: #ffffff;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-whatsapp:hover {
          background: #20BA5C;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
        }

        @media (max-width: 1024px) {
          .contact-cards-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .contact-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2rem;
          }

          .contact-cards-container {
            grid-template-columns: 1fr;
          }

          .contact-card {
            display: flex;
            align-items: center;
            text-align: left;
            padding: 1.25rem;
            gap: 1rem;
          }

          .contact-card-icon {
            width: 55px;
            height: 55px;
            margin: 0;
            flex-shrink: 0;
          }

          .contact-main {
            padding: 60px 5%;
          }

          .contact-info h2 {
            font-size: 1.5rem;
          }

          .map-section,
          .faq-section {
            padding: 60px 5%;
          }

          .map-header h2,
          .faq-header h2 {
            font-size: 1.5rem;
          }

          .faq-question h4 {
            font-size: 0.9rem;
          }

          .cta-section {
            padding: 60px 5%;
          }

          .cta-section h2 {
            font-size: 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
