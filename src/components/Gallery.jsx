import React from 'react';
import { galleryImages } from '../data/hotelData';
import { ZoomIn } from 'lucide-react';

export default function Gallery({ onOpenLightbox }) {
  return (
    <section className="gallery-showcase-section" id="gallery">
      <div className="container gallery-showcase-container">
        <div className="gallery-showcase-grid">
          
          {/* Top Left Header / Info Block */}
          <div className="gallery-info-block reveal-slide-left">
            <h2 className="gallery-showcase-title">
              Khám Phá Không Gian Nghỉ Dưỡng Tuyệt Mỹ
            </h2>
            <p className="gallery-showcase-desc">
              Dù bạn đang tìm kiếm một chốn dừng chân ấm cúng sau ngày dài dạo quanh phố núi, hay muốn lưu lại những khoảnh khắc tuyệt đẹp cùng người thương, Hệ Thống Khách Sạn Ngọc Sang sẽ luôn đồng hành để mang đến cho bạn trải nghiệm nghỉ dưỡng thư thái và đáng nhớ nhất.
            </p>
            <button
              className="gallery-explore-btn"
              onClick={() => onOpenLightbox(0)}
              type="button"
            >
              Khám phá ngay
            </button>
          </div>

          {/* Column 1 (Leftmost - 1 image offset down) */}
          <div className="gallery-column gallery-col-1">
            <div
              className="gallery-card card-col-1 reveal-zoom-glow delay-1"
              onClick={() => onOpenLightbox(0)}
              title={galleryImages[0]?.caption}
            >
              <img
                src={galleryImages[0]?.src}
                alt={galleryImages[0]?.caption}
                className="gallery-card-img"
                onError={(e) => { e.currentTarget.src = '/3220a5b7.jpg'; }}
              />
              <div className="gallery-card-overlay">
                <ZoomIn size={24} />
              </div>
            </div>
          </div>

          {/* Column 2 (2 images stacked) */}
          <div className="gallery-column gallery-col-2">
            <div
              className="gallery-card card-col-2-top reveal-zoom-glow delay-2"
              onClick={() => onOpenLightbox(1)}
              title={galleryImages[1]?.caption}
            >
              <img
                src={galleryImages[1]?.src}
                alt={galleryImages[1]?.caption}
                className="gallery-card-img"
                onError={(e) => { e.currentTarget.src = '/3220a5b7.jpg'; }}
              />
              <div className="gallery-card-overlay">
                <ZoomIn size={24} />
              </div>
            </div>

            <div
              className="gallery-card card-col-2-bottom reveal-zoom-glow delay-3"
              onClick={() => onOpenLightbox(2)}
              title={galleryImages[2]?.caption}
            >
              <img
                src={galleryImages[2]?.src}
                alt={galleryImages[2]?.caption}
                className="gallery-card-img"
                onError={(e) => { e.currentTarget.src = '/3220a5b7.jpg'; }}
              />
              <div className="gallery-card-overlay">
                <ZoomIn size={24} />
              </div>
            </div>
          </div>

          {/* Column 3 (2 images stacked, starting high at top) */}
          <div className="gallery-column gallery-col-3">
            <div
              className="gallery-card card-col-3-top reveal-zoom-glow delay-2"
              onClick={() => onOpenLightbox(3)}
              title={galleryImages[3]?.caption}
            >
              <img
                src={galleryImages[3]?.src}
                alt={galleryImages[3]?.caption}
                className="gallery-card-img"
                onError={(e) => { e.currentTarget.src = '/3220a5b7.jpg'; }}
              />
              <div className="gallery-card-overlay">
                <ZoomIn size={24} />
              </div>
            </div>

            <div
              className="gallery-card card-col-3-bottom reveal-zoom-glow delay-3"
              onClick={() => onOpenLightbox(4)}
              title={galleryImages[4]?.caption}
            >
              <img
                src={galleryImages[4]?.src}
                alt={galleryImages[4]?.caption}
                className="gallery-card-img"
                onError={(e) => { e.currentTarget.src = '/3220a5b7.jpg'; }}
              />
              <div className="gallery-card-overlay">
                <ZoomIn size={24} />
              </div>
            </div>
          </div>

          {/* Column 4 (Rightmost - 1 tall image offset down) */}
          <div className="gallery-column gallery-col-4">
            <div
              className="gallery-card card-col-4 reveal-zoom-glow delay-4"
              onClick={() => onOpenLightbox(5)}
              title={galleryImages[5]?.caption}
            >
              <img
                src={galleryImages[5]?.src}
                alt={galleryImages[5]?.caption}
                className="gallery-card-img"
                onError={(e) => { e.currentTarget.src = '/3220a5b7.jpg'; }}
              />
              <div className="gallery-card-overlay">
                <ZoomIn size={24} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
