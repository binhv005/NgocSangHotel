import React, { useState } from 'react';
import { Calendar, Users, ChevronDown, Search } from 'lucide-react';

export default function QuickBookingBar({ onSearch }) {
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState('all');
  const [showGuestPopover, setShowGuestPopover] = useState(false);

  const handleCheckInChange = (e) => {
    const val = e.target.value;
    setCheckIn(val);
    const nextDay = new Date(val);
    nextDay.setDate(nextDay.getDate() + 1);
    const nextDayStr = nextDay.toISOString().split('T')[0];
    if (checkOut <= val) {
      setCheckOut(nextDayStr);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch({
      checkIn,
      checkOut,
      adults,
      children,
      roomType
    });
  };

  return (
    <div className="booking-bar-wrapper">
      <div className="booking-bar">
        <form className="booking-form-bar" onSubmit={handleSearchSubmit}>
          {/* Check-in */}
          <div className="booking-field">
            <label htmlFor="barCheckIn" className="field-label">Ngày nhận phòng</label>
            <div className="field-input-group">
              <input
                type="date"
                id="barCheckIn"
                className="field-input"
                min={today}
                value={checkIn}
                onChange={handleCheckInChange}
                required
              />
              <Calendar size={18} className="field-icon" />
            </div>
          </div>

          <div className="field-divider"></div>

          {/* Check-out */}
          <div className="booking-field">
            <label htmlFor="barCheckOut" className="field-label">Ngày trả phòng</label>
            <div className="field-input-group">
              <input
                type="date"
                id="barCheckOut"
                className="field-input"
                min={checkIn}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
              />
              <Calendar size={18} className="field-icon" />
            </div>
          </div>

          <div className="field-divider"></div>

          {/* Guests */}
          <div className="booking-field relative">
            <label className="field-label">Số lượng khách</label>
            <div 
              className="field-input-group cursor-pointer"
              onClick={() => setShowGuestPopover(!showGuestPopover)}
            >
              <span className="field-text">{adults} Người lớn • {children} Trẻ em</span>
              <Users size={18} className="field-icon" />
            </div>

            {/* Guest Popover */}
            {showGuestPopover && (
              <div className="guest-popover active">
                <div className="guest-counter-row">
                  <div>
                    <div className="counter-label">Người lớn</div>
                    <div className="counter-sub">(Từ 12 tuổi trở lên)</div>
                  </div>
                  <div className="counter-ctrls">
                    <button type="button" className="btn-counter" onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                    <span>{adults}</span>
                    <button type="button" className="btn-counter" onClick={() => setAdults(adults + 1)}>+</button>
                  </div>
                </div>

                <div className="guest-counter-row">
                  <div>
                    <div className="counter-label">Trẻ em</div>
                    <div className="counter-sub">(Dưới 12 tuổi)</div>
                  </div>
                  <div className="counter-ctrls">
                    <button type="button" className="btn-counter" onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                    <span>{children}</span>
                    <button type="button" className="btn-counter" onClick={() => setChildren(children + 1)}>+</button>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="btn-popover-done"
                  onClick={() => setShowGuestPopover(false)}
                >
                  Xong
                </button>
              </div>
            )}
          </div>

          <div className="field-divider"></div>

          {/* Room Type */}
          <div className="booking-field">
            <label htmlFor="barRoomType" className="field-label">Loại phòng</label>
            <div className="field-input-group select-wrapper">
              <select
                id="barRoomType"
                className="field-select"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
              >
                <option value="all">Tất cả loại phòng</option>
                <option value="deluxe">Phòng Deluxe</option>
                <option value="superior">Phòng Superior</option>
                <option value="family">Phòng Family</option>
              </select>
              <ChevronDown size={18} className="field-icon" />
            </div>
          </div>

          {/* Submit Search */}
          <div className="booking-field booking-btn-wrap">
            <button type="submit" className="btn btn-search">
              <Search size={16} />
              <span>TÌM PHÒNG</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
