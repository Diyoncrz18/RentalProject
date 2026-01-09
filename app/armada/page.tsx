'use client';

import { useState } from 'react';
import Link from 'next/link';

const cars = [
    { name: "Toyota Avanza", type: "MPV - 7 Penumpang", category: "MPV", seats: 7, transmission: "Manual", price: "350K", rating: 4.8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVHg8Kp3U40aawoUhYhRSKsqtjtyMiD_vig&s" },
    { name: "Honda Jazz", type: "Hatchback - 5 Penumpang", category: "Hatchback", seats: 5, transmission: "Automatic", price: "400K", rating: 4.7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-odppB1_qWbLucsdtwfTeAJVrCKJaz7q7MA&s" },
    { name: "Toyota Innova Reborn", type: "MPV Premium - 7 Penumpang", category: "MPV", seats: 7, transmission: "Automatic", price: "550K", rating: 4.9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDDc-YzZKSGkRxc1ik25xF8jZNoyOa7KE0Ig&s" },
    { name: "Toyota Fortuner", type: "SUV - 7 Penumpang", category: "SUV", seats: 7, transmission: "Automatic", price: "850K", rating: 4.9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvCK1x4Xe_pcGTfvb5CPAgZJFvSNZd7v8tg&s" },
    { name: "Honda HR-V", type: "Crossover SUV - 5 Penumpang", category: "SUV", seats: 5, transmission: "Automatic", price: "500K", rating: 4.8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4E4cCjs8vc1NP8VbJ4ubZdOsCmxFZrqU-Iw&s" },
    { name: "Toyota Alphard", type: "Luxury MPV - 7 Penumpang", category: "Luxury", seats: 7, transmission: "Automatic", price: "2.5JT", rating: 5.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5IofudPBGR3vzDu8q71FoZu8tE_2JjrwGA&s" },
];

const categories = ["Semua", "MPV", "SUV", "Sedan", "Hatchback", "Luxury"];

export default function ArmadaPage() {
    const [activeCategory, setActiveCategory] = useState("Semua");

    const filteredCars = activeCategory === "Semua"
        ? cars
        : cars.filter(car => car.category === activeCategory);

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <h1><i className="fas fa-car-side"></i> Armada Kami</h1>
                <p>Pilih kendaraan impian Anda dari koleksi armada premium kami. Semua mobil terawat dengan baik dan siap menemani perjalanan Anda.</p>
                <div className="breadcrumb">
                    <Link href="/">Beranda</Link>
                    <span>/</span>
                    <span>Armada</span>
                </div>
            </section>

            {/* Stats Bar */}
            <div className="stats-bar">
                <div className="stats-container">
                    <div className="stats-item">
                        <div className="number">150+</div>
                        <div className="label">Unit Tersedia</div>
                    </div>
                    <div className="stats-item">
                        <div className="number">6</div>
                        <div className="label">Kategori Mobil</div>
                    </div>
                    <div className="stats-item">
                        <div className="number">24/7</div>
                        <div className="label">Layanan Support</div>
                    </div>
                    <div className="stats-item">
                        <div className="number">100%</div>
                        <div className="label">Mobil Terawat</div>
                    </div>
                </div>
            </div>

            {/* Filter Section */}
            <section className="filter-section">
                <div className="filter-container">
                    <div className="filter-header">
                        <h2 className="filter-title">Pilih Kategori Mobil</h2>
                        <div className="filter-tabs">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet Section */}
            <section className="fleet-section">
                <div className="fleet-container">
                    <div className="fleet-grid">
                        {filteredCars.map((car, index) => (
                            <div key={index} className="car-card">
                                <div className="car-image">
                                    <div className="car-favorite"><i className="far fa-heart"></i></div>
                                    <img src={car.image} alt={car.name} />
                                </div>
                                <div className="car-info">
                                    <div className="car-header">
                                        <div>
                                            <h3 className="car-name">{car.name}</h3>
                                            <p className="car-type">{car.type}</p>
                                        </div>
                                        <div className="car-rating">
                                            <i className="fas fa-star"></i>
                                            <span>{car.rating}</span>
                                        </div>
                                    </div>
                                    <div className="car-specs">
                                        <div className="spec-item">
                                            <i className="fas fa-users"></i>
                                            <span>{car.seats} Kursi</span>
                                        </div>
                                        <div className="spec-item">
                                            <i className="fas fa-cog"></i>
                                            <span>{car.transmission}</span>
                                        </div>
                                        <div className="spec-item">
                                            <i className="fas fa-snowflake"></i>
                                            <span>AC</span>
                                        </div>
                                    </div>
                                    <div className="car-footer">
                                        <div className="car-price">
                                            <span className="amount">Rp {car.price}</span>
                                            <span className="period">per hari</span>
                                        </div>
                                        <a
                                            href={`https://wa.me/6281344155598?text=Halo%20SinarRent,%20saya%20ingin%20menyewa%20${encodeURIComponent(car.name)}%20dengan%20harga%20Rp%20${car.price}%20per%20hari.%20Mohon%20informasi%20lebih%20lanjut.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-rent"
                                        >
                                            <i className="fab fa-whatsapp"></i>
                                            Sewa
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="features-container">
                    <div className="features-header">
                        <h2>Mengapa Menyewa di SinarRent?</h2>
                        <p>Nikmati berbagai keuntungan menyewa mobil bersama kami</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
                            <h4>Asuransi Lengkap</h4>
                            <p>Semua mobil dilengkapi asuransi komprehensif untuk ketenangan Anda</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fas fa-tools"></i></div>
                            <h4>Mobil Terawat</h4>
                            <p>Setiap unit menjalani perawatan rutin dan pengecekan berkala</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fas fa-headset"></i></div>
                            <h4>Support 24/7</h4>
                            <p>Tim customer service siap membantu Anda kapan saja</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fas fa-percent"></i></div>
                            <h4>Harga Terjangkau</h4>
                            <p>Harga kompetitif dengan berbagai promo menarik</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2>Tidak Menemukan Mobil yang Dicari?</h2>
                <p>Hubungi kami untuk permintaan khusus atau rekomendasi mobil sesuai kebutuhan Anda.</p>
                <Link href="/kontak" className="btn-primary">
                    <i className="fas fa-phone"></i>
                    Hubungi Kami
                </Link>
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

        .breadcrumb :global(a:hover) {
          text-decoration: underline;
        }

        .stats-bar {
          background: var(--bg-white);
          padding: 0 5%;
          margin-top: -40px;
          position: relative;
          z-index: 10;
        }

        .stats-container {
          max-width: 1000px;
          margin: 0 auto;
          background: var(--bg-white);
          border-radius: 20px;
          box-shadow: var(--shadow-xl);
          padding: 2rem 3rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .stats-item {
          text-align: center;
          padding: 1rem;
          border-right: 1px solid var(--border-color);
        }

        .stats-item:last-child {
          border-right: none;
        }

        .stats-item .number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
        }

        .stats-item .label {
          color: var(--text-medium);
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        .filter-section {
          padding: 60px 5% 40px;
          background: var(--bg-white);
        }

        .filter-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .filter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .filter-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--secondary);
        }

        .filter-tabs {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-tab {
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--border-color);
          border-radius: 50px;
          background: var(--bg-white);
          color: var(--text-medium);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .filter-tab:hover,
        .filter-tab.active {
          border-color: var(--primary);
          background: var(--primary);
          color: #ffffff;
        }

        .fleet-section {
          padding: 40px 5% 100px;
          background: var(--bg-light);
        }

        .fleet-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .fleet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .car-card {
          background: var(--bg-white);
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: all 0.4s ease;
        }

        .car-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-xl);
          border-color: transparent;
        }

        .car-image {
          position: relative;
          padding: 2rem;
          background: #ffffff;
          min-height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .car-image img {
          width: 100%;
          max-height: 220px;
          object-fit: contain;
          transition: transform 0.5s ease;
        }

        .car-card:hover .car-image img {
          transform: scale(1.08);
        }

        .car-favorite {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          background: var(--bg-white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-md);
        }

        .car-favorite :global(i) {
          color: var(--text-light);
        }

        .car-info {
          padding: 1.5rem 2rem 2rem;
        }

        .car-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .car-name {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 0.25rem;
        }

        .car-type {
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .car-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: var(--bg-light);
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
        }

        .car-rating :global(i) {
          color: #fbbf24;
          font-size: 0.85rem;
        }

        .car-rating span {
          font-weight: 600;
          color: var(--text-dark);
          font-size: 0.9rem;
        }

        .car-specs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin: 1.5rem 0;
          padding: 1.25rem;
          background: var(--bg-light);
          border-radius: 14px;
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          text-align: center;
        }

        .spec-item :global(i) {
          font-size: 1.25rem;
          color: var(--primary);
        }

        .spec-item span {
          color: var(--text-medium);
          font-size: 0.8rem;
          font-weight: 500;
        }

        .car-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }

        .car-price {
          display: flex;
          flex-direction: column;
        }

        .car-price .amount {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
        }

        .car-price .period {
          font-size: 0.85rem;
          color: var(--text-light);
        }

        .btn-rent {
          background: var(--primary);
          color: #ffffff;
          padding: 0.85rem 2rem;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .btn-rent:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
        }

        .features-section {
          padding: 80px 5%;
          background: var(--bg-white);
        }

        .features-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .features-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .features-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        .features-header p {
          color: var(--text-medium);
          font-size: 1.05rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: var(--bg-light);
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .feature-card:hover {
          background: var(--bg-white);
          border-color: var(--primary);
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .feature-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
        }

        .feature-icon :global(i) {
          font-size: 1.75rem;
          color: #ffffff;
        }

        .feature-card h4 {
          font-size: 1.1rem;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        .feature-card p {
          color: var(--text-medium);
          font-size: 0.9rem;
          line-height: 1.6;
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
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-section :global(.btn-primary) {
          background: #ffffff;
          color: var(--primary);
        }

        .cta-section :global(.btn-primary:hover) {
          background: var(--bg-light);
        }

        @media (max-width: 1024px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2rem;
          }

          .stats-container {
            grid-template-columns: 1fr 1fr;
            padding: 1.5rem;
            gap: 1rem;
          }

          .stats-item {
            padding: 0.5rem;
            border-right: none;
          }

          .stats-item .number {
            font-size: 1.75rem;
          }

          .filter-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .fleet-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </>
    );
}
