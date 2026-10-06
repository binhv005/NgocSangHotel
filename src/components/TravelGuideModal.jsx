import React from 'react';
import { X } from 'lucide-react';

export default function TravelGuideModal({ article, onClose, onBook }) {
  if (!article) return null;

  return (
    <div className="modal-backdrop active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-dialog">
        <button className="modal-close" onClick={onClose} aria-label="Đóng">
          <X size={22} />
        </button>

        <div className="guide-modal-content">
          <div style={{ marginBottom: '16px' }}>
            <div className="modal-tag">{article.category}</div>
            <h3 className="modal-title" style={{ fontSize: '1.5rem' }}>{article.title}</h3>
          </div>

          <div style={{ height: '220px', borderRadius: 'var(--border-radius-md)', overflow: 'hidden', marginBottom: '20px' }}>
            <img
              src={article.image}
              alt={article.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.currentTarget.src = '/671968606_1547284297398232_3948701064605489812_n.jpg'; }}
            />
          </div>

          <div
            className="guide-article-body"
            style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-muted)', whiteSpace: 'pre-line' }}
          >
            {article.content}
          </div>

          <div style={{ marginTop: '24px', textAlign: 'right' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onClose();
                onBook();
              }}
            >
              ĐẶT PHÒNG KHÁM PHÁ ĐÀ LẠT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
