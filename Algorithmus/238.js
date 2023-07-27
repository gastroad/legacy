/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  if (nums.length == 0) {
    return []
  }
  if (nums.length == 1) {
    return nums
  }
  if (nums.length == 2) {
    return nums.reverse()
  }

  var result = []
  var temp = nums[0]
  for (let i = 1; i < nums.length; i++) {
    temp = temp * nums[i]
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      var temp2 = false
      for (let j = 0; j < nums.length; j++) {
        if (j != i) {
          if (temp2 == false) {
            temp2 = nums[j]
          } else {
            temp2 = nums[j] * temp2
          }
        }
      }
      console.log(temp2)
      result.push(temp2)
    } else {
      if (nums[i]) {
        result.push(temp / nums[i])
      } else {
        result.push(temp / nums[i])
      }
    }
  }
  return result
};