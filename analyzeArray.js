export { analyzeArray };

function analyzeArray(array) {
  if (!array.every((element) => typeof element === "number")) {
    throw new Error("Array contains non-numbers!");
  }

  const length = array.length;

  const average =
    length == 0 ? null : array.reduce((prev, curr) => prev + curr, 0) / length;

  const min =
    length == 0
      ? null
      : array.reduce((prev, curr) => (curr < prev ? curr : prev), Infinity);

  const max =
    length == 0
      ? null
      : array.reduce((prev, curr) => (curr > prev ? curr : prev), -Infinity);

  return { average, min, max, length };
}
