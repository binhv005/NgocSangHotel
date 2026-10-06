import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message, isVisible }) {
  if (!isVisible) return null;

  return (
    <div className={`toast-notification ${isVisible ? 'active' : ''}`}>
      <CheckCircle size={18} />
      <span>{message}</span>
    </div>
  );
}
