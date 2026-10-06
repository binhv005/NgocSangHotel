import React from 'react';
import { Bed, Utensils, Headphones, CalendarCheck, MapPin } from 'lucide-react';
import { amenitiesData } from '../data/hotelData';

export default function Amenities() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Bed': return <Bed size={26} strokeWidth={1.9} />;
      case 'Utensils': return <Utensils size={26} strokeWidth={1.9} />;
      case 'Headphones': return <Headphones size={26} strokeWidth={1.9} />;
      case 'CalendarCheck': return <CalendarCheck size={26} strokeWidth={1.9} />;
      case 'MapPin': return <MapPin size={26} strokeWidth={1.9} />;
      default: return <Bed size={26} strokeWidth={1.9} />;
    }
  };

  return (
    <section className="section amenities-section" id="amenities">
      <div className="amenities-bg">
        <img
          src="/amenities-bg.jpg"
          alt="Không gian tiện ích nghỉ dưỡng Đà Lạt"
          className="amenities-bg-img"
          onError={(e) => { e.currentTarget.src = '/why-bg-dalat.jpg'; }}
        />
        <div className="amenities-overlay"></div>
      </div>

      <div className="container relative-z">
        <div className="amenities-layout-wrap">
          {/* Header */}
          <div className="amenities-header reveal-slide-left">
            <span className="section-tag">TIỆN ÍCH & DỊCH VỤ</span>
            <h2 className="section-title">Tiện ích & dịch vụ</h2>
          </div>

          {/* Top Right Handwritten Art Quote */}
          <div className="amenities-quote-wrap reveal-slide-right">
            <div className="art-quote-box">
              <span className="art-quote-cursive">Đà Lạt</span>
              <span className="art-quote-sub">luôn có điều</span>
              <span className="art-quote-end">để yêu ♡</span>
            </div>
          </div>

          {/* 5 Cards Grid */}
          <div className="amenities-grid">
            {amenitiesData.map((item, idx) => (
              <div key={item.id} className={`amenity-card reveal-pop-scale delay-${(idx % 5) + 1}`}>
                <div className="amenity-icon-circle">
                  {getIcon(item.icon)}
                </div>
                <h4 className="amenity-title">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
