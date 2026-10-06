import React, { useState, useEffect } from 'react';
import { hotelInfo } from '../data/hotelData';
import { Phone, ArrowUp } from 'lucide-react';

export default function FloatingActions({ onCallClick }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-container-right">
      {/* 1. Call Button */}
      <a
        href={`tel:${hotelInfo.hotline}`}
        className="float-circle-btn float-call"
        onClick={(e) => onCallClick(e, hotelInfo.hotline)}
        aria-label="Gọi điện Hotline"
        data-tooltip={`Hotline: ${hotelInfo.hotline}`}
      >
        <Phone size={22} />
      </a>

      {/* 2. Zalo Button */}
      <a
        href={hotelInfo.zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        className="float-circle-btn float-zalo"
        aria-label="Chat Zalo"
        data-tooltip={`Zalo: ${hotelInfo.zalo}`}
      >
        <span className="zalo-badge-icon">Zalo</span>
      </a>

      {/* 3. Messenger Button */}
      <a
        href={hotelInfo.messengerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="float-circle-btn float-messenger"
        aria-label="Facebook Messenger"
        data-tooltip="Nhắn Messenger"
      >
        <svg viewBox="0 0 28 28" fill="currentColor" width="22" height="22">
          <path d="M14 2C7.373 2 2 7.07 2 13.323c0 3.559 1.74 6.732 4.47 8.784V26l3.75-2.06c1.17.324 2.43.5 3.78.5 6.627 0 12-5.07 12-11.323C26 7.07 20.627 2 14 2zm1.2 15.22l-3.07-3.28-6 3.28 6.6-7.01 3.15 3.28 5.92-3.28-6.6 7.01z"/>
        </svg>
      </a>

      {/* 4. Back to Top Button */}
      <button
        className={`float-circle-btn float-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Lên đầu trang"
        data-tooltip="Lên đầu trang"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
