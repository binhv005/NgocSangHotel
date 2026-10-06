import React from 'react';
import { hotelInfo } from '../data/hotelData';
import Logo from './Logo';
import { Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';

export default function Footer({ onCallClick }) {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col col-brand reveal-fade-up delay-1">
            <a href="#hero" className="footer-logo" onClick={(e) => scrollTo(e, 'hero')}>
              <Logo theme="light" />
            </a>
            <p className="footer-desc" style={{ marginTop: '12px' }}>
              Mang đến cho bạn không gian lưu trú tiện nghi, thoải mái và những trải nghiệm tuyệt vời tại Đà Lạt.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col col-links reveal-fade-up delay-2">
            <ul className="footer-nav">
              <li><a href="#hero" onClick={(e) => scrollTo(e, 'hero')}>Trang chủ</a></li>
              <li><a href="#about" onClick={(e) => scrollTo(e, 'about')}>Giới thiệu</a></li>
              <li><a href="#rooms" onClick={(e) => scrollTo(e, 'rooms')}>Phòng</a></li>
              <li><a href="#experience" onClick={(e) => scrollTo(e, 'experience')}>Trải nghiệm Đà Lạt</a></li>
              <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')}>Gallery</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Liên hệ</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Channels */}
          <div className="footer-col col-contact reveal-fade-up delay-3">
            <h4 className="footer-heading">Liên hệ với Ngọc Sang</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone size={16} />
                <span>Hotline: <strong className="contact-hl cursor-pointer" onClick={(e) => onCallClick(e, hotelInfo.hotline)}>{hotelInfo.hotline}</strong></span>
              </li>
              <li>
                <MessageCircle size={16} />
                <a href={hotelInfo.zaloLink} target="_blank" rel="noopener noreferrer">Zalo: <strong>{hotelInfo.zalo}</strong></a>
              </li>
              <li>
                <span style={{ width: 16, display: 'inline-block', fontWeight: 'bold' }}>M</span>
                <a href={hotelInfo.messengerLink} target="_blank" rel="noopener noreferrer">Messenger</a>
              </li>
              <li>
                <span style={{ width: 16, display: 'inline-block', fontWeight: 'bold' }}>F</span>
                <a href={hotelInfo.facebookLink} target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <MapPin size={16} />
                <a href={hotelInfo.googleMapsLink} target="_blank" rel="noopener noreferrer">Google Maps</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Map Preview */}
          <div className="footer-col col-map reveal-fade-up delay-4">
            <div className="footer-map-card">
              <a href={hotelInfo.googleMapsLink} target="_blank" rel="noopener noreferrer" className="map-link-wrap">
                <div className="map-img-container">
                  <img
                    src="/dalat-maps.jpg"
                    alt="Bản đồ chỉ đường Khách Sạn Ngọc Sang Đà Lạt"
                    className="map-real-img"
                  />
                  <div className="map-hover-badge">
                    <MapPin size={14} />
                    <span>Mở Maps</span>
                  </div>
                </div>
                <div className="map-cta">
                  <span>Xem bản đồ trên Google Maps</span>
                  <ArrowRight size={14} />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2026 Hệ Thống Khách Sạn Ngọc Sang Đà Lạt. All rights reserved.
          </p>
          <div className="footer-social-corner">
            <a href={hotelInfo.facebookLink} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              F
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
