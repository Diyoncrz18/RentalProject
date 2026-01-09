'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TentangKamiPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <h1>Tentang <span>SinarRent</span></h1>
        <p>Kenali lebih dekat layanan rental mobil terpercaya yang telah melayani ribuan pelanggan dengan kepuasan tertinggi.</p>
        <div className="breadcrumb">
          <Link href="/">Beranda</Link>
          <span>/</span>
          <span>Tentang Kami</span>
        </div>
      </section>

      {/* Story Section */}
      <section className="section about-story">
        <div className="section-container">
          <div className="story-grid">
            <div className="story-image">
              <Image
                src="/images/alphard.avif"
                alt="SinarRent Story"
                width={500}
                height={400}
              />
              <div className="experience-badge">
                <div className="number">10+</div>
                <div className="text">Tahun Pengalaman</div>
              </div>
            </div>
            <div className="story-content">
              <h2>Perjalanan Kami Menuju Layanan Rental Mobil Terbaik</h2>
              <p>
                Didirikan pada tahun 2014, SinarRent hadir dengan visi menjadi penyedia layanan rental mobil terpercaya di Indonesia.
                Berawal dari 5 unit mobil, kini kami telah berkembang menjadi salah satu perusahaan rental mobil terkemuka dengan lebih dari 150 unit armada berkualitas.
              </p>
              <p>
                Komitmen kami adalah memberikan pengalaman berkendara yang aman, nyaman, dan berkesan bagi setiap pelanggan.
                Dengan tim profesional dan armada yang selalu terawat, kami siap menemani perjalanan bisnis maupun liburan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="section vision-mission">
        <div className="section-container">
          <div className="section-header">
            <p className="section-subtitle">Visi & Misi</p>
            <h2 className="section-title">Arah dan Tujuan Kami</h2>
          </div>
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Visi</h3>
              <p>
                Menjadi perusahaan rental mobil terdepan di Indonesia yang dikenal dengan layanan berkualitas tinggi,
                armada premium, dan kepuasan pelanggan yang tak tertandingi.
              </p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Misi</h3>
              <ul>
                <li>Menyediakan armada berkualitas dengan perawatan rutin</li>
                <li>Memberikan pelayanan profesional dan ramah</li>
                <li>Menawarkan harga kompetitif dan transparan</li>
                <li>Mengutamakan keamanan dan kenyamanan pelanggan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="section-container">
          <div className="section-header">
            <p className="section-subtitle">Nilai-Nilai Kami</p>
            <h2 className="section-title">Prinsip yang Kami Pegang</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h4>Kepuasan Pelanggan</h4>
              <p>Kepuasan Anda adalah prioritas utama kami</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Integritas</h4>
              <p>Jujur dan transparan dalam setiap layanan</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-star"></i>
              </div>
              <h4>Kualitas</h4>
              <p>Standar tinggi dalam armada dan pelayanan</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h4>Inovasi</h4>
              <p>Terus berkembang mengikuti kebutuhan zaman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="number">150+</div>
            <div className="label">Unit Armada</div>
          </div>
          <div className="stat-item">
            <div className="number">5000+</div>
            <div className="label">Pelanggan Puas</div>
          </div>
          <div className="stat-item">
            <div className="number">10+</div>
            <div className="label">Tahun Pengalaman</div>
          </div>
          <div className="stat-item">
            <div className="number">24/7</div>
            <div className="label">Layanan Support</div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="section-container">
          <div className="section-header">
            <p className="section-subtitle">Tim Kami</p>
            <h2 className="section-title">Orang-Orang di Balik SinarRent</h2>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <i className="fas fa-user"></i>
              </div>
              <div className="team-info">
                <h4>Ahmad Sinar</h4>
                <p className="position">Founder & CEO</p>
                <p>Berpengalaman lebih dari 15 tahun di industri otomotif</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <i className="fas fa-user"></i>
              </div>
              <div className="team-info">
                <h4>Dewi Putri</h4>
                <p className="position">Operations Manager</p>
                <p>Memastikan setiap operasional berjalan dengan sempurna</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <i className="fas fa-user"></i>
              </div>
              <div className="team-info">
                <h4>Budi Santoso</h4>
                <p className="position">Customer Service Lead</p>
                <p>Dedikasi penuh untuk kepuasan setiap pelanggan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="section-container">
          <div className="cta-box">
            <h2>Siap Memulai Perjalanan Bersama Kami?</h2>
            <p>Hubungi kami sekarang dan nikmati pengalaman rental mobil terbaik</p>
            <Link href="/kontak" className="btn-primary">
              <i className="fas fa-phone"></i>
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-header {
          padding: 150px 5% 80px;
          background: linear-gradient(135deg, var(--bg-white) 0%, var(--bg-light) 100%);
          text-align: center;
          position: relative;
        }

        .page-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, rgba(37, 99, 235, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .page-header h1 {
          font-size: 3rem;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 1rem;
        }

        .page-header h1 span {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .page-header p {
          color: var(--text-medium);
          font-size: 1.15rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .breadcrumb {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .breadcrumb :global(a) {
          color: var(--primary);
          text-decoration: none;
        }

        .section {
          padding: 100px 5%;
        }

        .about-story {
          background: var(--bg-white);
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .story-image {
          position: relative;
        }

        .story-image :global(img) {
          width: 100%;
          border-radius: 20px;
          box-shadow: var(--shadow-xl);
        }

        .story-image::before {
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

        .experience-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: var(--primary);
          color: #fff;
          padding: 1.5rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: var(--shadow-lg);
        }

        .experience-badge .number {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
        }

        .experience-badge .text {
          font-size: 0.85rem;
          font-weight: 500;
        }

        .story-content h2 {
          font-size: 2rem;
          color: var(--secondary);
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }

        .story-content p {
          color: var(--text-medium);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .vision-mission {
          background: var(--bg-light);
        }

        .vm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .vm-card {
          background: var(--bg-white);
          padding: 3rem;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .vm-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: transparent;
        }

        .vm-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.25);
        }

        .vm-icon :global(i) {
          font-size: 1.75rem;
          color: #ffffff;
        }

        .vm-card h3 {
          font-size: 1.5rem;
          color: var(--secondary);
          margin-bottom: 1rem;
        }

        .vm-card p {
          color: var(--text-medium);
          line-height: 1.8;
        }

        .vm-card ul {
          list-style: none;
          padding: 0;
          margin-top: 1rem;
        }

        .vm-card ul li {
          color: var(--text-medium);
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
        }

        .vm-card ul li::before {
          content: '\\f00c';
          font-family: 'Font Awesome 6 Free';
          font-weight: 900;
          position: absolute;
          left: 0;
          color: var(--primary);
        }

        .values-section {
          background: var(--bg-white);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .value-card {
          background: var(--bg-light);
          padding: 2.5rem 2rem;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .value-card:hover {
          background: var(--bg-white);
          border-color: var(--primary);
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .value-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .value-icon :global(i) {
          font-size: 2rem;
          color: #ffffff;
        }

        .value-card h4 {
          font-size: 1.25rem;
          color: var(--secondary);
          margin-bottom: 0.75rem;
        }

        .value-card p {
          color: var(--text-medium);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .stats-section {
          background: var(--primary);
          padding: 60px 5%;
        }

        .stats-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          color: #fff;
        }

        .stat-item .number {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-item .label {
          font-size: 1rem;
          opacity: 0.9;
        }

        .team-section {
          background: var(--bg-light);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .team-card {
          background: var(--bg-white);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: transparent;
        }

        .team-image {
          width: 100%;
          height: 280px;
          background: linear-gradient(135deg, var(--bg-light) 0%, var(--bg-gray) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .team-image :global(i) {
          font-size: 5rem;
          color: var(--primary);
          opacity: 0.5;
        }

        .team-info {
          padding: 1.5rem;
          text-align: center;
        }

        .team-info h4 {
          font-size: 1.1rem;
          color: var(--secondary);
          margin-bottom: 0.25rem;
        }

        .team-info .position {
          color: var(--primary);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .team-info p {
          color: var(--text-medium);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .cta-section {
          background: var(--bg-white);
        }

        .cta-box {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          padding: 4rem;
          border-radius: 24px;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-box h2 {
          color: #fff;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .cta-box p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .cta-box :global(.btn-primary) {
          background: #fff;
          color: var(--primary);
        }

        .cta-box :global(.btn-primary:hover) {
          background: var(--bg-light);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .story-grid,
          .vm-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }

          .stat-item .number {
            font-size: 2rem;
          }

          .cta-box {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
