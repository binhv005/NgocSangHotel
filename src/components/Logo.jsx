import React from 'react';

export default function Logo({ theme = 'dark', className = '' }) {
  // theme = 'dark' (for light background like Header) or 'light' (for dark background like Footer)
  const isLight = theme === 'light';

  return (
    <div className={`brand-logo-wrap ${className}`}>
      <div className="brand-emblem-container">
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="brand-emblem-svg"
        >
          <defs>
            {/* Gold Gradients */}
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7dc87" />
              <stop offset="35%" stopColor="#d4af37" />
              <stop offset="70%" stopColor="#aa7c11" />
              <stop offset="100%" stopColor="#e5c158" />
            </linearGradient>
            
            <linearGradient id="goldGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff0b3" />
              <stop offset="50%" stopColor="#e5be50" />
              <stop offset="100%" stopColor="#c2941b" />
            </linearGradient>

            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#d4af37" floodOpacity="0.4" />
            </filter>
          </defs>

          <g filter="url(#goldGlow)">
            {/* 1. Royal Crown on Top */}
            <g transform="translate(30, 4) scale(0.6)">
              {/* Crown Pearls */}
              <circle cx="10" cy="18" r="4" fill="url(#goldGrad)" />
              <circle cx="32" cy="10" r="4" fill="url(#goldGrad)" />
              <circle cx="50" cy="6" r="4.5" fill="url(#goldGrad)" />
              <circle cx="68" cy="10" r="4" fill="url(#goldGrad)" />
              <circle cx="90" cy="18" r="4" fill="url(#goldGrad)" />

              {/* Crown Peaks & Body */}
              <path
                d="M10 22L20 46H80L90 22L70 34L50 14L30 34L10 22Z"
                fill="url(#goldGrad)"
                stroke="url(#goldGradLight)"
                strokeWidth="1.5"
              />

              {/* Crown Arch Details */}
              <path
                d="M20 46Q50 52 80 46L82 54Q50 60 18 54Z"
                fill="url(#goldGrad)"
              />
              {/* Crown Jewels */}
              <circle cx="35" cy="42" r="2.5" fill="#fff" opacity="0.8" />
              <circle cx="50" cy="40" r="3" fill="#fff" opacity="0.8" />
              <circle cx="65" cy="42" r="2.5" fill="#fff" opacity="0.8" />
            </g>

            {/* 2. Outer Circular Crest */}
            <circle
              cx="60"
              cy="72"
              r="40"
              stroke="url(#goldGrad)"
              strokeWidth="5"
              fill="none"
              strokeDasharray="210 42"
              strokeDashoffset="25"
            />
            <circle
              cx="60"
              cy="72"
              r="34"
              stroke="url(#goldGradLight)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.8"
            />

            {/* 3. Intertwined "N" and "S" Monogram */}
            {/* Letter N */}
            <path
              d="M45 56V88M45 58L68 86M68 56V88"
              stroke="url(#goldGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Letter S swooping over and under N */}
            <path
              d="M74 61C74 55 64 53 58 55C50 58 48 68 59 72C72 76 72 87 62 89C54 90 46 86 46 80"
              stroke="url(#goldGradLight)"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="brand-text-col">
        <span className={`brand-main-title ${isLight ? 'text-white' : 'text-forest'}`}>
          NGỌC SANG HOTEL
        </span>
      </div>
    </div>
  );
}
