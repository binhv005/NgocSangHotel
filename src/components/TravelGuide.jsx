import React from 'react';
import { travelGuideData } from '../data/hotelData';
import { ArrowRight } from 'lucide-react';

export default function TravelGuide({ onSelectArticle }) {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header-flex reveal-fade-up">
          <div>
            <h2 className="section-title">Khám phá Đà Lạt cùng Ngọc Sang</h2>
          </div>
          <a href="#experience" className="link-with-arrow">
            <span>Xem tất cả</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="experience-grid">
          {travelGuideData.map((item, idx) => (
            <article
              key={item.id}
              className={`exp-card cursor-pointer reveal-blur-up delay-${(idx % 3) + 1}`}
              onClick={() => onSelectArticle(item)}
            >
              <div className="exp-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="exp-img"
                  onError={(e) => { e.currentTarget.src = '/671968606_1547284297398232_3948701064605489812_n.jpg'; }}
                />
              </div>
              <div className="exp-body">
                <div className="exp-category">{item.category}</div>
                <h4 className="exp-title">{item.title}</h4>
                <p className="exp-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
