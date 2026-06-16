/**
 * Truncates text to a specified length and appends a suffix.
 * @param text The input text to truncate
 * @param length The maximum length of the string
 * @param suffix The suffix to append (defaults to '...')
 */
export const truncateText = (text: string, length: number, suffix = '...'): string => {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + suffix;
};

/**
 * Capitalizes the first letter of each word in a string.
 */
export const capitalizeWords = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
