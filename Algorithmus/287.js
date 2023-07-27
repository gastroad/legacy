/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function(nums) {
  var result = 0;
  nums.sort((q, w) => {
    console.log(q, w);
    if (q == w) {
      result = q;
    }
  });
  return result;
};
