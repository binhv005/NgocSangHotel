import React, { useState, useEffect } from 'react';
import { hotelInfo, roomsData } from '../data/hotelData';
import { Phone, Calendar, User, PhoneCall, CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';

export default function BookingCTA({ onCallClick, onShowToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    roomType: 'Phòng Deluxe',
    checkIn: '',
    checkOut: '',
    guests: '2 Khách',
    note: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrow = tomorrowDate.toISOString().split('T')[0];

    setFormData((prev) => ({
      ...prev,
      checkIn: today,
      checkOut: tomorrow
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      if (onShowToast) onShowToast('Vui lòng điền họ tên và số điện thoại liên hệ!');
      return;
    }

    if (formData.checkOut <= formData.checkIn) {
      if (onShowToast) onShowToast('Ngày trả phòng phải sau ngày nhận phòng!');
      return;
    }

    setIsSuccess(true);
    if (onShowToast) onShowToast('Yêu cầu đặt phòng đã gửi thành công!');
  };

  return (
    <section className="cta-split-section" id="booking-cta">
      <div className="cta-split-grid">
        {/* Left 50%: Pure Hotel Image without overlay */}
        <div className="cta-split-left reveal-item-left">
          <img
            src="/hotel.jpg"
            alt="Hệ Thống Khách Sạn Ngọc Sang Đà Lạt"
            className="cta-split-img"
            onError={(e) => { e.currentTarget.src = '/bg-1.jpg'; }}
          />
        </div>

        {/* Right 50%: In-Section Booking Form (Light Theme) */}
        <div className="cta-split-right reveal-item-right">
          <div className="cta-form-wrapper">
            {isSuccess ? (
              <div className="cta-form-success">
                <CheckCircle2 size={54} className="cta-success-icon" />
                <h3 className="cta-success-title">Đã Gửi Yêu Cầu Thành Công!</h3>
                <p className="cta-success-desc">
                  Cảm ơn quý khách <strong>{formData.fullName}</strong>! Bộ phận lễ tân của Hệ Thống Khách Sạn Ngọc Sang đã nhận được yêu cầu đặt <strong>{formData.roomType}</strong> và sẽ liên hệ qua số <strong>{formData.phone}</strong> trong giây lát.
                </p>
                <button
                  type="button"
                  className="btn btn-primary cta-btn-reset"
                  onClick={() => setIsSuccess(false)}
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form className="cta-inline-form" onSubmit={handleSubmit}>
                <div className="cta-form-header">
                  <span className="section-tag">ĐẶT PHÒNG TRỰC TIẾP</span>
                  <h3 className="cta-form-title">
                    Sẵn sàng cho chuyến đi <span className="script-gold-title">Đà Lạt tuyệt vời?</span>
                  </h3>
                  <p className="cta-form-note">Giữ phòng sớm để nhận trọn vẹn ưu đãi và hỗ trợ tốt nhất</p>
                </div>

                <div className="cta-form-grid">
                  {/* Row 1: Full Name & Phone */}
                  <div className="cta-field-group">
                    <label className="cta-label">
                      <User size={14} />
                      <span>Họ và tên *</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className="cta-input"
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="cta-field-group">
                    <label className="cta-label">
                      <Phone size={14} />
                      <span>Số điện thoại *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="cta-input"
                      placeholder="Ví dụ: 0912 345 678"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Row 2: Room Type & Guests */}
                  <div className="cta-field-group">
                    <label className="cta-label">
                      <span>Loại phòng *</span>
                    </label>
                    <select
                      name="roomType"
                      className="cta-select"
                      value={formData.roomType}
                      onChange={handleChange}
                    >
                      {roomsData.map((r) => (
                        <option key={r.id} value={r.name}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="cta-field-group">
                    <label className="cta-label">
                      <span>Số lượng khách</span>
                    </label>
                    <select
                      name="guests"
                      className="cta-select"
                      value={formData.guests}
                      onChange={handleChange}
                    >
                      <option value="1 Khách">1 Khách</option>
                      <option value="2 Khách">2 Khách (Cặp đôi/Bạn bè)</option>
                      <option value="3 Khách">3 Khách</option>
                      <option value="4 Khách">4 Khách (Gia đình/Nhóm)</option>
                      <option value="5+ Khách">5+ Khách (Nhóm lớn)</option>
                    </select>
                  </div>

                  {/* Row 3: Check-in & Check-out */}
                  <div className="cta-field-group">
                    <label className="cta-label">
                      <Calendar size={14} />
                      <span>Ngày nhận phòng *</span>
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      className="cta-input"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="cta-field-group">
                    <label className="cta-label">
                      <Calendar size={14} />
                      <span>Ngày trả phòng *</span>
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      className="cta-input"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Row 4: Note (Full width) */}
                  <div className="cta-field-group cta-col-span-2">
                    <label className="cta-label">
                      <span>Ghi chú / Yêu cầu đặc biệt (nếu có)</span>
                    </label>
                    <input
                      type="text"
                      name="note"
                      className="cta-input"
                      placeholder="Ví dụ: Tầng cao, đón sân bay, thuê xe máy..."
                      value={formData.note}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary cta-submit-btn">
                  GỬI YÊU CẦU ĐẶT PHÒNG
                </button>

                {/* Direct Booking Guarantees & Hotline */}
                <div className="cta-form-footer-info">
                  <div className="cta-guarantee-tag">
                    <ShieldCheck size={16} className="cta-guarantee-icon" />
                    <span>Giá trực tiếp tốt nhất</span>
                  </div>
                  <div className="cta-guarantee-tag">
                    <Clock size={16} className="cta-guarantee-icon" />
                    <span>Xác nhận 24/7</span>
                  </div>
                  <div className="cta-guarantee-tag">
                    <PhoneCall size={16} className="cta-guarantee-icon" />
                    <span>
                      Hotline: <strong className="cta-inline-hotline cursor-pointer" onClick={(e) => onCallClick(e, hotelInfo.hotline)}>{hotelInfo.hotlineDisplay || hotelInfo.hotline}</strong>
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
