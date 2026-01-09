'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Beranda' },
        { href: '/tentang-kami', label: 'Tentang Kami' },
        { href: '/armada', label: 'Armada' },
        { href: '/kontak', label: 'Kontak' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <Link href="/" className="logo">
                <i className="fas fa-car"></i>
                SinarRent
            </Link>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={pathname === link.href ? 'active' : ''}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="nav-actions">
                <Link href="/kontak" className="btn-primary nav-btn">
                    <i className="fas fa-phone"></i>
                    Hubungi Kami
                </Link>
                <div
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}
