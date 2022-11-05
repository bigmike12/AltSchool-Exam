export const truncateMultilineText = (text, numChars) => {
  if (!text) return "";

  // Because '...' will be appended to long strings,
  // this ensures that the entire character count is as specified
  const maxStringLength = numChars - 3;

  return maxStringLength > text.length
    ? text
    : `${text.trim().substring(0, maxStringLength)}...`;
};
