const calculator = require("./calculator");
it("add", async () => {
  expect(calculator.add(4, 5)).toBe(9);
});
it("subtract", async () => {
  expect(calculator.subtract(6, 5)).toBe(1);
});
it("multi", async () => {
  expect(calculator.multi(5, 6)).toBe(30);
});
it("divide", async () => {
  expect(calculator.divide(30, 5)).toBe(6);
});
