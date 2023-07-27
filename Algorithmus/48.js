/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ],

var rotate = function(matrix) {
  if (matrix.length < 1) {
    return;
  }

  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {}
  }

  return matrix;
};
