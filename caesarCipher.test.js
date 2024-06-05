const caesarCipher = require("./caesarCipher");
it("caesarCipher", async () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
