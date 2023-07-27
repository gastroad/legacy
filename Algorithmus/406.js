/**
 * @param {number[][]} people
 * @return {number[][]}
 */

var order = array => {
  [4, 4];
};
var reconstructQueue = function(people) {
  people.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    } else { 
      return a[0] - b[0];
    }
  });
  order(people);
};
reconstructQueue([
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 2],
  [5, 0],
  [6, 1]
]);
