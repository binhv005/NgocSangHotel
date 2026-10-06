import React from 'react';
import { whyChooseUsData } from '../data/hotelData';

export default function WhyChooseUs() {
  return (
    <section className="section why-section" id="why-us">
      <div className="why-bg">
        <img
          src="/why-bg-dalat.jpg"
          alt="Lựa chọn thuận tiện cho chuyến đi Đà Lạt"
          className="why-bg-img"
          onError={(e) => { e.currentTarget.src = '/bg-1.jpg'; }}
        />
        <div className="why-overlay"></div>
      </div>

      <div className="why-container relative-z">
        <div className="why-grid">
          <div className="why-left reveal-slide-left">
            <span className="why-subtitle-tag">TẠI SAO CHỌN NGỌC SANG?</span>
            <h2 className="why-main-heading">
              Lựa chọn thuận tiện<br />
              cho chuyến đi Đà Lạt
            </h2>
          </div>

          <div className="why-cards">
            {whyChooseUsData.map((item, idx) => (
              <div key={idx} className={`why-card reveal-slide-right delay-${(idx % 4) + 1}`}>
                <div className="why-number">{item.number}</div>
                <h4 className="why-title">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
