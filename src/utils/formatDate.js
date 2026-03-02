/**
 * Format a date object to a readable string format
 * @param {Date|string} date - The date to format
 * @param {string} format - The format type ('short', 'long', 'full')
 * @returns {string} The formatted date string
 */
export const formatDate = (date, format = 'short') => {
  if (!date) return '';

  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const options = {
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    full: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
  };

  return dateObj.toLocaleDateString('en-US', options[format] || options.short);
};

/**
 * Format a time string
 * @param {string} time - Time in HH:mm format
 * @returns {string} Formatted time
 */
export const formatTime = (time) => {
  if (!time) return '';

  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;

  return `${displayHour}:${minutes} ${ampm}`;
};

/**
 * Format date and time together
 * @param {Date|string} date - The date to format
 * @param {string} time - Time in HH:mm format
 * @returns {string} Formatted date and time
 */
export const formatDateTime = (date, time) => {
  return `${formatDate(date)} at ${formatTime(time)}`;
};
