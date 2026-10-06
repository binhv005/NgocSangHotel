import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'rooms', 'why-us', 'experience', 'gallery', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="header-container">
        <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, 'hero')} aria-label="Ngọc Sang Hotel">
          <Logo theme="dark" />
        </a>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'hero')}>Trang chủ</a>
            </li>
            <li className="nav-item">
              <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'about')}>Giới thiệu</a>
            </li>
            <li className="nav-item">
              <a href="#rooms" className={`nav-link ${activeSection === 'rooms' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'rooms')}>Phòng</a>
            </li>
            <li className="nav-item">
              <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'experience')}>Trải nghiệm Đà Lạt</a>
            </li>
            <li className="nav-item">
              <a href="#gallery" className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'contact')}>Liên hệ</a>
            </li>
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <button className="btn btn-primary btn-header-book" onClick={() => onOpenBooking()}>
            ĐẶT PHÒNG
          </button>
          
          <button 
            className="menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
