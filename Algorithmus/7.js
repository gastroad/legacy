/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var temp1 = x.toString().split("");
  var result = 0;
  if (temp1[0] == "-") {
    temp1.splice(0, 1);
    temp1.reverse();
    result = parseInt("-" + temp1.join(""));
  } else {
    temp1.reverse();
    result = parseInt(temp1.join(""));
  }
  if (x > 2147483648 || x < -2147483648) {
    result = 0;
  }
  if (result > 2147483648 || result < -2147483648) {
    result = 0;
  }
  return result;
};
