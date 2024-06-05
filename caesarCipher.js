const caesarCipher = (input, key) => {
  if (!isNumber(key)) {
    return new Error("Key must be a number");
  }
  // get the actual key we will use for the Ciper
  let actKey = key % 26;
  let inputLength = input.length;
  let cipherString = "";
  for (let i = 0; i < inputLength; i++) {
    let currentCharCode = input.charCodeAt(i);
    let cipherCharCode = currentCharCode + actKey;
    if (currentCharCode >= 65 && currentCharCode <= 90) {
      if (cipherCharCode > 90) {
        let reminder = cipherCharCode % 90;
        cipherCharCode = 64 + reminder;
      }
      cipherString += String.fromCharCode(cipherCharCode);
    } else if (currentCharCode >= 97 && currentCharCode <= 122) {
      if (cipherCharCode > 122) {
        let reminder = cipherCharCode % 122;
        cipherCharCode = 96 + reminder;
      }
      cipherString += String.fromCharCode(cipherCharCode);
    } else {
      cipherString += input[i];
    }
  }
  return cipherString;
};

function isNumber(input) {
  return typeof input === "number";
}
module.exports = caesarCipher;
