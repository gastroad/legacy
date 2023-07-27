/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var result = "";
  if (nums.length === 1) {
    return nums[0];
  }
  var map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  var temp = nums.length / 2;
  for (let j of map) {
    if (j[1] > temp) {
      result = j[0];
    }
  }
  return result;
};
