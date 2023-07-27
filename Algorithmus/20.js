/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  let array = s.split("");
  let stack = [];
  if (array.length == 0) return true;
  if (array.length % 2 !== 0) return false;

  for (let i of array) {
    if (i == "(") stack.push(")");
    else if (i == "{") stack.push("}");
    else if (i == "[") stack.push("]");
    else if (stack.length == 0 || i !== stack.pop()) return false;
  }
  if (stack.length === 0) return true;
  return false;
};
