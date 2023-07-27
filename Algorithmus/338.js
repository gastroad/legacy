/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var result = [];
  for (var i = 0; i < num + 1; i++) {
    var binaryString = i.toString(2);
    var binaryArray = binaryString.split("");
    var test = binaryArray.filter(number => {
      if (number == 1) {
        return true;
      } else {
        return false;
      }
    });
    result.push(test.length);
  }
  return result;
};
