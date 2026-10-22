import React from 'react';

export default function Logo({ size = 42, light = false, className = '' }) {
  return (
    <div 
      className={`logo-container ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 700,
        fontSize: `${size}px`,
        letterSpacing: '-2px',
        lineHeight: 1,
        userSelect: 'none',
        textDecoration: 'none'
      }}
    >
      <span style={{ color: light ? '#FFFFFF' : '#111318' }}>owe</span>
      <span style={{ color: '#8B72F5' }}>K</span>
    </div>
  );
}
