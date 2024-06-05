function analyzeArray(input) {
  if (!Array.isArray(input)) {
    return new Error("Input should be an array");
  }
  let average =
    input.reduce((prev, current) => {
      return prev + current;
    }, 0) / input.length;
  let min = input.reduce((prev, current) => {
    return current < prev ? current : prev;
  });

  let max = input.reduce((prev, current) => {
    return current > prev ? current : prev;
  });
  return { average: average, min: min, max: max, length: input.length };
}
module.exports = analyzeArray;
