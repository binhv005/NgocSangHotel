import React from 'react';
import QuickBookingBar from './QuickBookingBar';
import { hotelInfo } from '../data/hotelData';

export default function Hero({ onOpenBooking, onSearchBooking }) {
  const scrollToRooms = (e) => {
    e.preventDefault();
    const roomsEl = document.getElementById('rooms');
    if (roomsEl) {
      roomsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img
          src="/bghero.jpg"
          alt="Không gian khách sạn Ngọc Sang Đà Lạt"
          className="hero-img"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">


        <p className="hero-tagline">
          {hotelInfo.tagline}
        </p>

        <p className="hero-desc">
          {hotelInfo.description}
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => onOpenBooking()}>
            ĐẶT PHÒNG
          </button>
          <a href="#rooms" className="btn btn-outline" onClick={scrollToRooms}>
            KHÁM PHÁ PHÒNG
          </a>
        </div>
      </div>

      {/* Embedded Floating Quick Booking Bar */}
      <QuickBookingBar onSearch={onSearchBooking} />
    </section>
  );
}
