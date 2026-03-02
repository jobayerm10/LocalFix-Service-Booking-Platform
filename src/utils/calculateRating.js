/**
 * Calculate average rating from reviews
 * @param {Array} reviews - Array of review objects with 'rating' property
 * @returns {number} Average rating rounded to 1 decimal place
 */
export const calculateAverageRating = (reviews) => {
  if (!reviews || reviews.length === 0) return 0;

  const sum = reviews.reduce((acc, review) => acc + (review.rating || 0), 0);
  return Math.round((sum / reviews.length) * 10) / 10;
};

/**
 * Get rating distribution
 * @param {Array} reviews - Array of review objects with 'rating' property
 * @returns {Object} Object with rating counts
 */
export const getRatingDistribution = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };
  }

  const distribution = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  reviews.forEach(review => {
    const rating = Math.round(review.rating);
    if (distribution.hasOwnProperty(rating)) {
      distribution[rating]++;
    }
  });

  return distribution;
};

/**
 * Format star text
 * @param {number} rating - Rating value
 * @returns {string} Star text representation
 */
export const getStarText = (rating) => {
  if (rating >= 4.5) return 'Excellent';
  if (rating >= 3.5) return 'Very Good';
  if (rating >= 2.5) return 'Good';
  if (rating >= 1.5) return 'Fair';
  return 'Poor';
};
