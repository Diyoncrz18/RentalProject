'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="beranda">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Temukan Kenyamanan<br />
              <span>Perjalanan Anda</span>
            </h1>
            <p className="hero-description">
              Nikmati pengalaman berkendara terbaik dengan armada mobil berkualitas premium.
              Harga terjangkau, pelayanan profesional, dan kenyamanan maksimal untuk setiap perjalanan Anda.
            </p>
            <div className="hero-buttons">
              <Link href="/armada" className="btn-primary">
                <i className="fas fa-car"></i>
                Lihat Armada
              </Link>
              <Link href="#tentang" className="btn-secondary">
                <i className="fas fa-play-circle"></i>
                Pelajari Lebih
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">150+</div>
                <div className="stat-label">Unit Mobil</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Pelanggan Puas</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/images/mobil.png"
              alt="Rental Mobil Premium"
              width={650}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="tentang">
        <div className="section-container">
          <div className="section-header">
            <p className="section-subtitle">Tentang Kami</p>
            <h2 className="section-title">Mengapa Memilih SinarRent?</h2>
            <p className="section-description">
              Kami berkomitmen memberikan layanan rental mobil terbaik dengan armada berkualitas dan pelayanan profesional.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-image">
              <Image
                src="/images/alphard.avif"
                alt="Tentang SinarRent"
                width={500}
                height={400}
              />
            </div>
            <div className="about-content">
              <h3>Layanan Rental Mobil Terpercaya Sejak 2014</h3>
              <p>
                SinarRent hadir sebagai solusi transportasi premium untuk kebutuhan perjalanan bisnis maupun liburan Anda.
                Dengan pengalaman lebih dari 10 tahun, kami telah melayani ribuan pelanggan dengan tingkat kepuasan tertinggi.
              </p>
              <p>
                Armada kami terdiri dari berbagai jenis mobil berkualitas yang selalu dalam kondisi prima.
                Setiap kendaraan menjalani maintenance rutin untuk memastikan keamanan dan kenyamanan perjalanan Anda.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Mobil Terawat</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Harga Kompetitif</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Driver Profesional</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Asuransi Lengkap</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Layanan 24 Jam</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Proses Cepat</span>
                </div>
              </div>
              <Link href="/kontak" className="btn-primary" style={{ marginTop: '2rem' }}>
                <i className="fas fa-arrow-right"></i>
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="section-container">
          <div className="section-header">
            <p className="section-subtitle">Keunggulan</p>
            <h2 className="section-title">Mengapa Pelanggan Memilih Kami</h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h4>Harga Terbaik</h4>
              <p>Harga sewa kompetitif dengan berbagai paket menarik sesuai kebutuhan Anda.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-car-alt"></i>
              </div>
              <h4>Armada Berkualitas</h4>
              <p>Mobil-mobil berkondisi prima dengan perawatan rutin untuk kenyamanan Anda.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h4>Layanan 24/7</h4>
              <p>Tim support kami siap melayani Anda kapan saja, di mana saja.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Asuransi Lengkap</h4>
              <p>Perlindungan menyeluruh untuk ketenangan pikiran selama perjalanan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="fleet-section" id="armada">
        <div className="section-container">
          <div className="section-header">
            <p className="section-subtitle">Armada Kami</p>
            <h2 className="section-title">Pilihan Mobil Terbaik</h2>
            <p className="section-description">
              Berbagai pilihan mobil berkualitas untuk memenuhi kebutuhan perjalanan Anda.
            </p>
          </div>
          <div className="fleet-grid">
            <CarCard
              name="Toyota Avanza"
              type="MPV - 7 Penumpang"
              seats={7}
              transmission="Manual"
              price="350K"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVHg8Kp3U40aawoUhYhRSKsqtjtyMiD_vig&s"
            />
            <CarCard
              name="Honda Jazz"
              type="Hatchback - 5 Penumpang"
              seats={5}
              transmission="Automatic"
              price="400K"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-odppB1_qWbLucsdtwfTeAJVrCKJaz7q7MA&s"
            />
            <CarCard
              name="Toyota Innova Reborn"
              type="MPV Premium - 7 Penumpang"
              seats={7}
              transmission="Automatic"
              price="550K"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDDc-YzZKSGkRxc1ik25xF8jZNoyOa7KE0Ig&s"
            />
            <CarCard
              name="Toyota Fortuner"
              type="SUV - 7 Penumpang"
              seats={7}
              transmission="Automatic"
              price="850K"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvCK1x4Xe_pcGTfvb5CPAgZJFvSNZd7v8tg&s"
            />
            <CarCard
              name="Honda HR-V"
              type="Crossover SUV - 5 Penumpang"
              seats={5}
              transmission="Automatic"
              price="500K"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4E4cCjs8vc1NP8VbJ4ubZdOsCmxFZrqU-Iw&s"
            />
            <CarCard
              name="Toyota Alphard"
              type="Luxury MPV - 7 Penumpang"
              seats={7}
              transmission="Automatic"
              price="2.5JT"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5IofudPBGR3vzDu8q71FoZu8tE_2JjrwGA&s"
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/armada" className="btn-primary">
              Lihat Semua Armada
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="kontak">
        <div className="section-container">
          <div className="section-header">
            <p className="section-subtitle">Hubungi Kami</p>
            <h2 className="section-title">Ada Pertanyaan? Hubungi Kami</h2>
            <p className="section-description">
              Tim kami siap membantu Anda dengan segala kebutuhan rental mobil.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4>Alamat</h4>
                  <p>Jl. Raya Utama No. 123<br />Jakarta Selatan, 12345</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4>Telepon</h4>
                  <p>+62 812 3456 7890<br />+62 21 1234 5678</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@SinarRent.co.id<br />booking@SinarRent.co.id</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4>Jam Operasional</h4>
                  <p>Senin - Sabtu: 08:00 - 20:00<br />Minggu: 09:00 - 17:00</p>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-link"><i className="fab fa-whatsapp"></i></a>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.29234512406!2d106.7588355!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1703779200000!5m2!1sid!2sid"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nama Lengkap</label>
                    <input type="text" placeholder="Masukkan nama Anda" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Masukkan email Anda" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>No. Telepon</label>
                    <input type="tel" placeholder="Masukkan no. telepon" />
                  </div>
                  <div className="form-group">
                    <label>Subjek</label>
                    <input type="text" placeholder="Subjek pesan" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Pesan</label>
                  <textarea rows={5} placeholder="Tulis pesan Anda..."></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  <i className="fas fa-paper-plane"></i>
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 5% 80px;
          position: relative;
          background: linear-gradient(135deg, var(--bg-white) 0%, var(--bg-light) 100%);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 80%;
          height: 150%;
          background: radial-gradient(ellipse at center, rgba(37, 99, 235, 0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: center;
          width: 100%;
        }

        .hero-content {
          z-index: 10;
          animation: fadeInUp 1s ease forwards;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.5rem;
          color: var(--secondary);
        }

        .hero-title span {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          color: var(--text-medium);
          font-size: 1.15rem;
          margin-bottom: 2.5rem;
          max-width: 600px;
          line-height: 1.85;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .stat-item {
          text-align: left;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          color: var(--text-light);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .hero-image {
          position: relative;
          z-index: 5;
          animation: fadeInRight 1s ease 0.3s forwards;
        }

        .hero-image :global(img) {
          width: 100%;
          max-width: 650px;
          height: auto;
          filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.15));
          animation: float 6s ease-in-out infinite;
        }

        /* About Section */
        .about-section {
          padding: 100px 5%;
          background: var(--bg-white);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .about-image {
          position: relative;
        }

        .about-image :global(img) {
          width: 100%;
          border-radius: 20px;
          box-shadow: var(--shadow-xl);
        }

        .about-image::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid var(--primary);
          border-radius: 20px;
          top: 20px;
          left: 20px;
          z-index: -1;
          opacity: 0.3;
        }

        .about-content h3 {
          font-size: 1.75rem;
          color: var(--secondary);
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }

        .about-content p {
          color: var(--text-medium);
          margin-bottom: 1.25rem;
          line-height: 1.8;
        }

        .about-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-dark);
          font-weight: 500;
        }

        .feature-item :global(i) {
          color: var(--primary);
          font-size: 1.1rem;
        }

        /* Why Section */
        .why-section {
          padding: 100px 5%;
          background: var(--bg-light);
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        .why-card {
          background: var(--bg-white);
          padding: 2.5rem 2rem;
          border-radius: 20px;
          text-align: center;
          border: 1px solid var(--border-color);
          transition: all 0.4s ease;
        }

        .why-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: transparent;
        }

        .why-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.25);
        }

        .why-icon :global(i) {
          font-size: 2rem;
          color: #ffffff;
        }

        .why-card h4 {
          font-size: 1.25rem;
          color: var(--secondary);
          margin-bottom: 0.75rem;
        }

        .why-card p {
          color: var(--text-medium);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* Fleet Section */
        .fleet-section {
          padding: 100px 5%;
          background: var(--bg-white);
        }

        .fleet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        /* Contact Section */
        .contact-section {
          padding: 100px 5%;
          background: var(--bg-light);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .contact-icon {
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.25);
        }

        .contact-icon :global(i) {
          color: #ffffff;
          font-size: 1.25rem;
        }

        .contact-item h4 {
          font-size: 1rem;
          color: var(--secondary);
          margin-bottom: 0.25rem;
        }

        .contact-item p {
          color: var(--text-medium);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .social-link {
          width: 48px;
          height: 48px;
          background: var(--bg-white);
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
          border-color: var(--primary);
          color: #ffffff;
          transform: translateY(-3px);
        }

        .map-container {
          margin-top: 1.5rem;
        }

        .contact-form {
          background: var(--bg-white);
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-lg);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-dark);
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1.25rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          background: var(--bg-light);
          color: var(--text-dark);
          font-family: inherit;
          font-size: 1rem;
          resize: none;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: var(--bg-white);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-content {
            order: 1;
          }

          .hero-image {
            order: 0;
          }

          .hero-description {
            margin: 0 auto 2rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .stat-item {
            text-align: center;
          }

          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.25rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .about-features {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

function CarCard({ name, type, seats, transmission, price, image }: {
  name: string;
  type: string;
  seats: number;
  transmission: string;
  price: string;
  image: string;
}) {
  return (
    <div className="car-card">
      <div className="car-image">
        <img src={image} alt={name} />
      </div>
      <div className="car-info">
        <h3 className="car-name">{name}</h3>
        <p className="car-type">{type}</p>
        <div className="car-specs">
          <div className="spec-item">
            <i className="fas fa-users"></i>
            <span>{seats} Kursi</span>
          </div>
          <div className="spec-item">
            <i className="fas fa-cog"></i>
            <span>{transmission}</span>
          </div>
          <div className="spec-item">
            <i className="fas fa-snowflake"></i>
            <span>AC</span>
          </div>
        </div>
        <div className="car-footer">
          <div className="car-price">Rp {price} <span>/hari</span></div>
          <button className="btn-rent">Sewa</button>
        </div>
      </div>

      <style jsx>{`
        .car-card {
          background: var(--bg-white);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: all 0.4s ease;
        }

        .car-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: transparent;
        }

        .car-image {
          position: relative;
          padding: 2rem;
          background: #ffffff;
        }

        .car-image img {
          width: 100%;
          height: 220px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .car-card:hover .car-image img {
          transform: scale(1.05);
        }

        .car-info {
          padding: 1.5rem;
        }

        .car-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--secondary);
          margin-bottom: 0.25rem;
        }

        .car-type {
          color: var(--text-light);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .car-specs {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-medium);
          font-size: 0.85rem;
        }

        .spec-item :global(i) {
          color: var(--primary);
          font-size: 0.9rem;
        }

        .car-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }

        .car-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
        }

        .car-price span {
          font-size: 0.85rem;
          color: var(--text-light);
          font-weight: 400;
        }

        .btn-rent {
          background: var(--primary);
          color: #ffffff;
          padding: 0.6rem 1.5rem;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-rent:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(37, 99, 235, 0.3);
        }
      `}</style>
    </div>
  );
}
