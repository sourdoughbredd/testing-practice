export { reverseString };

// Returns the input str with the characters reversed
function reverseString(str) {
  if (!str) return str;
  let result = "";
  const len = str.length;
  for (let i = len - 1; i >= 0; i--) {
    result += str.slice(i, i + 1);
  }
  return result;
}
