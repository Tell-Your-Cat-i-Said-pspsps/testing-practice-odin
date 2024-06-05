const add = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.log("can only accept numbers");
  }
};
const subtract = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a - b;
  } else {
    console.log("can only accept numbers");
  }
};
const multi = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a * b;
  } else {
    console.log("can only accept numbers");
  }
};
const divide = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a / b;
  } else {
    console.log("can only accept numbers");
  }
};

function isNumber(input) {
  return typeof input === "number";
}
module.exports = {
  add,
  subtract,
  multi,
  divide,
};
