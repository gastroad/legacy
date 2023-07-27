/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  test = new Array(n).fill(new Array(m).fill(1));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i > 0 && j > 0) {
        test[i][j] = test[i][j - 1] + test[i - 1][j];
      }
    }
  }
  return test[n - 1][m - 1];
};
