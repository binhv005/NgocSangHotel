import React from 'react';
import { User, Users, Maximize, Wifi, Snowflake, Coffee, Bath, Tv } from 'lucide-react';

export default function RoomCard({ room, index = 0, onSelectDetail, onBook }) {
  return (
    <div className={`room-card reveal-card-tilt delay-${(index % 3) + 1}`} data-room-type={room.id}>
      <div className="room-img-wrap">
        <img
          src={room.image}
          alt={room.name}
          className="room-img"
          onError={(e) => { e.currentTarget.src = room.fallbackImage; }}
        />
        <div className="room-badge">{room.badge}</div>
      </div>

      <div className="room-body">
        <h3 className="room-name">{room.name}</h3>
        
        <div className="room-meta">
          <span>
            {room.capacity > 2 ? <Users size={15} /> : <User size={15} />}
            {room.guests}
          </span>
          <span>
            <Maximize size={15} />
            {room.area}
          </span>
        </div>

        <div className="room-amenity-icons">
          <span title="Wifi tốc độ cao"><Wifi size={15} /></span>
          <span title="Điều hòa không khí"><Snowflake size={15} /></span>
          <span title="Bình đun siêu tốc"><Coffee size={15} /></span>
          <span title="Phòng tắm khép kín"><Bath size={15} /></span>
          <span title="Tivi thông minh"><Tv size={15} /></span>
        </div>

        <div className="room-actions">
          <button 
            type="button" 
            className="btn btn-room-detail"
            onClick={() => onSelectDetail(room)}
          >
            XEM CHI TIẾT
          </button>
          <button 
            type="button" 
            className="btn btn-room-book"
            onClick={() => onBook(room.name)}
          >
            ĐẶT PHÒNG
          </button>
        </div>
      </div>
    </div>
  );
}
