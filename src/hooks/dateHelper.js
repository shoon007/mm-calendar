/**
 * Converts English digits to Myanmar Unicode digits.
 * @param {number|string} num - The value to be converted.
 * @returns {string} - The converted Myanmar digit string.
 */
export const toMyanmarDigits = (num) => {
  if (num === null || num === undefined) return "";
  
  const digits = { 
    0: "၀", 1: "၁", 2: "၂", 3: "၃", 4: "၄", 
    5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉" 
  };
  
  return String(num)
    .split("")
    .map((char) => digits[char] || char)
    .join("");
};

/**
 * Returns structured information about the current date.
 * Useful for "Today" highlighting and headers.
 */
export const getTodayInfo = () => {
  const today = new Date();
  return {
    day: today.getDate(),
    month: today.getMonth(), // 0-indexed (Jan = 0)
    year: today.getFullYear(),
  };
};

/**
 * Formats a date object into a standard YYYY-MM-DD string.
 * Used for matching with the holidays.json date keys.
 */
export const formatDateKey = (year, monthIdx, day) => {
  const mm = String(monthIdx + 1).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${year}-${mm}-${dd}`;
};

/**
 * Checks if a given date is today's date.
 */
export const isDateToday = (year, monthIdx, day) => {
  const today = new Date();
  return (
    today.getDate() === day &&
    today.getMonth() === monthIdx &&
    today.getFullYear() === year
  );
};