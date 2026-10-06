import React, { useEffect } from 'react';
import { galleryImages } from '../data/hotelData';

export default function LightboxModal({ isOpen, currentIndex, onClose, onNavigate }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(-1);
      if (e.key === 'ArrowRight') onNavigate(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  const currentImg = galleryImages[currentIndex] || galleryImages[0];

  return (
    <div className="lightbox active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button className="lightbox-close" onClick={onClose} aria-label="Đóng Lightbox">
        &times;
      </button>

      <button className="lightbox-nav lightbox-prev" onClick={() => onNavigate(-1)} aria-label="Ảnh trước">
        &#10094;
      </button>

      <div className="lightbox-content">
        <img
          src={currentImg.src}
          alt={currentImg.caption}
          id="lightboxImg"
          onError={(e) => { e.currentTarget.src = '/3220a5b7.jpg'; }}
        />
        <div className="lightbox-caption">
          {currentImg.caption} ({currentIndex + 1}/{galleryImages.length})
        </div>
      </div>

      <button className="lightbox-nav lightbox-next" onClick={() => onNavigate(1)} aria-label="Ảnh kế tiếp">
        &#10095;
      </button>
    </div>
  );
}
