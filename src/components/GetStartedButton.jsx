import React, { useState } from 'react';

const GetStartedButton = () => {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50px',
    border: 'none',
    padding: '10px 20px',
    backgroundColor: hovered ? '#003c96' : '#ffffff',
    color: hovered ? '#ffffff' : '#003c96',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const iconStyle = {
    marginLeft: '10px',
    backgroundColor: hovered ? '#ffffff' : '#003c96',
    color: hovered ? '#003c96' : '#ffffff',
    borderRadius: '50%',
    padding: '8px 13px',
    fontSize: '14px',
    transition: 'all 0.3s ease',
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Get started now
      <span style={iconStyle}>&#8599;</span> {/* ↗ arrow icon */}
    </button>
  );
};

export default GetStartedButton;
