/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var stringToArray = s.split("");
  var test = Array.from({ length: numRows });
  var temp = test.map((_, index) => {
    return stringToArray.map((string, i) => {
      console.log(index, i);
      console.warn(i % index);
      if (index == i % index) {
        return string;
      }
    });
  });
  return temp.join("");
};
