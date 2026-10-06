import React from 'react';
import RoomCard from './RoomCard';
import { roomsData } from '../data/hotelData';
import { ArrowRight } from 'lucide-react';

export default function RoomList({ onSelectDetail, onBook }) {
  return (
    <section className="section rooms-section" id="rooms">
      <div className="container">
        <div className="section-header-flex reveal-fade-down">
          <div>
            <h2 className="section-title">Không gian nghỉ ngơi dành cho bạn</h2>
            <p className="section-desc">Lựa chọn không gian phù hợp cho chuyến đi Đà Lạt của bạn.</p>
          </div>
          <a href="#rooms" className="link-with-arrow">
            <span>Xem tất cả phòng</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="rooms-grid">
          {roomsData.map((room, idx) => (
            <RoomCard
              key={room.id}
              room={room}
              index={idx}
              onSelectDetail={onSelectDetail}
              onBook={onBook}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
