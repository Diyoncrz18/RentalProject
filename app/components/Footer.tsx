'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-brand">
                    <Link href="/" className="logo">
                        <i className="fas fa-car"></i>
                        SinarRent
                    </Link>
                    <p>
                        Layanan rental mobil terpercaya dengan armada berkualitas dan pelayanan profesional.
                        Kepuasan pelanggan adalah prioritas utama kami.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link href="/">Beranda</Link></li>
                        <li><Link href="/tentang-kami">Tentang Kami</Link></li>
                        <li><Link href="/armada">Armada</Link></li>
                        <li><Link href="/kontak">Kontak</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className="footer-title">Layanan</h4>
                    <ul className="footer-links">
                        <li><a href="#">Sewa Harian</a></li>
                        <li><a href="#">Sewa Mingguan</a></li>
                        <li><a href="#">Sewa Bulanan</a></li>
                        <li><a href="#">Dengan Driver</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className="footer-title">Bantuan</h4>
                    <ul className="footer-links">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Syarat &amp; Ketentuan</a></li>
                        <li><a href="#">Kebijakan Privasi</a></li>
                        <li><a href="#">Cara Pemesanan</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 SinarRent. All Rights Reserved.</p>
                <p>Designed with <i className="fas fa-heart"></i> in Indonesia</p>
            </div>
        </footer>
    );
}
