import React from 'react';

const RatingStars = ({ 
  rating = 0, 
  maxRating = 5,
  size = 'md',
  interactive = false,
  onRatingChange = null
}) => {
  const sizeStyles = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const handleClick = (value) => {
    if (interactive && onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className="flex gap-1">
      {[...Array(maxRating)].map((_, i) => (
        <span
          key={i}
          onClick={() => handleClick(i + 1)}
          className={`${sizeStyles[size]} ${
            i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'
          } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''} transition-colors`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStars;
