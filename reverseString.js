function reverseString(input) {
  let length = input.length;
  let reversed = "";
  for (let i = 0; i < length; i++) {
    reversed += input[length - 1 - i];
  }
  return reversed;
}
module.exports = reverseString;
