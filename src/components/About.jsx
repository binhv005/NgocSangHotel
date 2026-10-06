import React from 'react';
import { MapPin, Bed, PhoneCall, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title reveal-blur-up">
              <span className="script-gold-title">Nghỉ ngơi thoải mái,</span><br />
              <span className="script-gold-title">khám phá Đà Lạt trọn vẹn</span>
            </h2>
            <p className="section-desc reveal-blur-up delay-1">
              Hệ Thống Khách Sạn Ngọc Sang mang đến không gian lưu trú tiện nghi tại Đà Lạt với hệ thống phòng đa dạng, phục vụ khách du lịch, cặp đôi, gia đình, nhóm bạn, khách công tác và khách du lịch tự túc.
            </p>

            <div className="about-cta reveal-blur-up delay-2">
              <a href="#rooms" className="btn btn-pill-primary">
                <span>TÌM HIỂU THÊM</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* 3 Highlights */}
            <div className="about-features">
              <div className="about-feature-item reveal-pop-scale delay-1">
                <div className="feature-icon-circle">
                  <MapPin size={20} />
                </div>
                <div className="feature-info">
                  <h4>Vị trí thuận tiện</h4>
                  <p>tại Đà Lạt</p>
                </div>
              </div>

              <div className="about-feature-item reveal-pop-scale delay-2">
                <div className="feature-icon-circle">
                  <Bed size={20} />
                </div>
                <div className="feature-info">
                  <h4>Phòng đa dạng</h4>
                  <p>phù hợp nhiều nhu cầu</p>
                </div>
              </div>

              <div className="about-feature-item reveal-pop-scale delay-3">
                <div className="feature-icon-circle">
                  <PhoneCall size={20} />
                </div>
                <div className="feature-info">
                  <h4>Hỗ trợ tận tâm</h4>
                  <p>24/7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image-wrap reveal-image-card">
            <div className="about-image-card">
              <img
                src="/3220a5b7.jpg"
                alt="Phòng nghỉ tiện nghi tại Khách sạn Ngọc Sang Đà Lạt"
                className="about-img"
                onError={(e) => { e.currentTarget.src = '/28e61113(1).jpg'; }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
