// helpers.js

module.exports = {
  format_date: function (date, options) {
    // Check if the date argument is a valid date object
    if (!(date instanceof Date) || isNaN(date)) {
      return '';
    }

    // Specify the date format options (e.g., 'en-US', { dateStyle: 'long' })
    const formatOptions = options.hash || {};

    // Format the date using toLocaleDateString method and the provided options
    return date.toLocaleDateString(formatOptions.locale, formatOptions);
  },
};

