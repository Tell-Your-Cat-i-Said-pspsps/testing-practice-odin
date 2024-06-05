function capitalize(input) {
  let tmp = input.toLowerCase().trim();
  let output = tmp[0].toUpperCase() + tmp.slice(1);
  return output;
}
module.exports = capitalize;
