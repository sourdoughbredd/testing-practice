export { capitalize };

// Returns the input string with the first character capitalized
function capitalize(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
