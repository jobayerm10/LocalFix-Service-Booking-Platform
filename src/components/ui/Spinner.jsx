import React from 'react';

const Spinner = ({ 
  size = 'md', 
  color = 'blue',
  className = ''
}) => {
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colorStyles = {
    blue: 'border-blue-500',
    white: 'border-white',
    gray: 'border-gray-500',
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`
          ${sizeStyles[size]}
          border-4
          ${colorStyles[color]}
          border-t-transparent
          rounded-full
          animate-spin
          ${className}
        `}
      />
    </div>
  );
};

export default Spinner;
