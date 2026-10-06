import React from 'react';
import { X, Users, Bed, Maximize, Check } from 'lucide-react';

export default function RoomDetailModal({ room, onClose, onBookRoom }) {
  if (!room) return null;

  return (
    <div className="modal-backdrop active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-dialog modal-lg">
        <button className="modal-close" onClick={onClose} aria-label="Đóng">
          <X size={22} />
        </button>

        <div className="room-detail-body">
          <div className="room-detail-modal-wrap">
            <div className="room-detail-img-box">
              <img
                src={room.image}
                alt={room.name}
                onError={(e) => { e.currentTarget.src = room.fallbackImage; }}
              />
            </div>
            <div className="room-detail-info">
              <div className="modal-tag">HỆ THỐNG KHÁCH SẠN NGỌC SANG</div>
              <h3>{room.name}</h3>
              <p className="section-desc" style={{ fontSize: '0.88rem', marginBottom: '12px' }}>
                {room.description}
              </p>

              <ul className="room-detail-spec-list">
                <li><Users size={16} /> <strong>Sức chứa:</strong> {room.guests}</li>
                <li><Bed size={16} /> <strong>Loại giường:</strong> {room.bed}</li>
                <li><Maximize size={16} /> <strong>Diện tích:</strong> {room.area}</li>
              </ul>

              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--forest-green)', marginTop: '14px', marginBottom: '6px' }}>
                Tiện nghi phòng:
              </h4>
              <ul className="room-detail-spec-list" style={{ marginTop: '4px' }}>
                {room.amenities.map((item, idx) => (
                  <li key={idx}><Check size={16} /> {item}</li>
                ))}
              </ul>

              <div style={{ marginTop: '20px' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => {
                    onClose();
                    onBookRoom(room.name);
                  }}
                >
                  ĐẶT PHÒNG NÀY NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
