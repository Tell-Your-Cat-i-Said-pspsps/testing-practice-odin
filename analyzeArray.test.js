const analyzeArray = require("./analyzeArray");
it("Analyze", async () => {
  expect(analyzeArray([1, 9, 8, 3, 4, 2, 6, 3])).toStrictEqual({
    average: 4.5,
    min: 1,
    max: 9,
    length: 8,
  });
});
