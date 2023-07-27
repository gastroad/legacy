/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  var result = []
  if (nums.length == 0) return result
  if (nums.length == 1) return [[], [nums]]
  for (let i = 0; i < nums.length; i++) {
    result.push([nums[i]])
  }
  return result

};