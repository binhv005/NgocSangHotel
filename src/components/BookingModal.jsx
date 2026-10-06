import React, { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData, onShowToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    roomType: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Khách',
    note: '',
    consent: true
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      const today = new Date().toISOString().split('T')[0];
      const tomorrowDate = new Date();
      tomorrowDate.setDate(tomorrowDate.getDate() + 1);
      const tomorrow = tomorrowDate.toISOString().split('T')[0];

      setFormData((prev) => ({
        ...prev,
        roomType: initialData?.roomType || '',
        checkIn: initialData?.checkIn || today,
        checkOut: initialData?.checkOut || tomorrow,
        guests: initialData?.guests || '2 Khách'
      }));
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.checkIn || !formData.checkOut || !formData.roomType) {
      onShowToast('Vui lòng điền đầy đủ các thông tin bắt buộc!');
      return;
    }

    if (formData.checkOut <= formData.checkIn) {
      onShowToast('Ngày trả phòng phải sau ngày nhận phòng!');
      return;
    }

    setIsSuccess(true);
    onShowToast('Yêu cầu đặt phòng đã gửi thành công!');
  };

  return (
    <div className="modal-backdrop active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-dialog">
        <button className="modal-close" onClick={onClose} aria-label="Đóng">
          <X size={22} />
        </button>

        <div className="modal-header">
          <div className="modal-tag">HỆ THỐNG KHÁCH SẠN NGỌC SANG ĐÀ LẠT</div>
          <h3 className="modal-title">Đặt Phòng Trực Tiếp</h3>
          <p className="modal-sub">Điền thông tin bên dưới để gửi yêu cầu đặt phòng nhanh chóng.</p>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="formFullName">Họ và tên <span className="required">*</span></label>
              <input
                type="text"
                id="formFullName"
                name="fullName"
                placeholder="Ví dụ: Nguyễn Văn A"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="formPhone">Số điện thoại <span className="required">*</span></label>
              <input
                type="tel"
                id="formPhone"
                name="phone"
                placeholder="Ví dụ: 0912 345 678"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="formEmail">Email</label>
              <input
                type="email"
                id="formEmail"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formRoomType">Loại phòng <span className="required">*</span></label>
              <select
                id="formRoomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
              >
                <option value="">-- Chọn loại phòng --</option>
                <option value="Phòng Deluxe">Phòng Deluxe (2 Khách)</option>
                <option value="Phòng Superior">Phòng Superior (2 Khách)</option>
                <option value="Phòng Family">Phòng Family (4 Khách)</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="formCheckIn">Ngày nhận phòng <span className="required">*</span></label>
              <input
                type="date"
                id="formCheckIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="formCheckOut">Ngày trả phòng <span className="required">*</span></label>
              <input
                type="date"
                id="formCheckOut"
                name="checkOut"
                value={formData.checkOut}
                min={formData.checkIn}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="formGuests">Số lượng khách</label>
              <select
                id="formGuests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              >
                <option value="1 Khách">1 Khách</option>
                <option value="2 Khách">2 Khách</option>
                <option value="3 Khách">3 Khách</option>
                <option value="4 Khách">4 Khách</option>
                <option value="Đoàn đông người">Đoàn đông người (Liên hệ trực tiếp)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="formNotes">Yêu cầu thêm</label>
              <input
                type="text"
                id="formNotes"
                name="note"
                placeholder="Check-in sớm, giường đôi/đơn..."
                value={formData.note}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-checkbox">
            <input
              type="checkbox"
              id="formConsent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <label htmlFor="formConsent">
              Tôi đồng ý cung cấp thông tin để nhân viên khách sạn liên hệ tư vấn và xác nhận đặt phòng.
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary btn-submit-booking">
              GỬI YÊU CẦU ĐẶT PHÒNG
            </button>
          </div>

          {isSuccess && (
            <div className="booking-status-msg active">
              <CheckCircle2 size={24} />
              <p>
                <strong>Yêu cầu đặt phòng đã được gửi!</strong> Nhân viên Hệ Thống Khách Sạn Ngọc Sang sẽ liên hệ sớm nhất để xác nhận cùng quý khách.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
