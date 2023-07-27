/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
  if (nums.length == 0) {
    return result;
  } else if (nums.length == 1) {
    return [nums];
  } else {
    nums.map((i, index1) => {
      let indexOfCurrentNumber = nums.findIndex(current => {
        if (current == i) {
          return true;
        }
      });
      var sliceArray = nums.slice(indexOfCurrentNumber, 1);
      console.log(sliceArray);
    });
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var ret = [];
  var lengthOfNums = nums.length;
  backtrack(nums, 0, []);
  return ret;

  function backtrack(input, level, output) {
    for (var i = 0; i < input.length; i++) {
      output.push(input[i]);
      if (level == lengthOfNums - 1) {
        ret.push([...output]);
        output.pop();
        --level;
        return;
      }
      var inputWithoutI = [...input];
      inputWithoutI.splice(i, 1);
      backtrack(inputWithoutI, ++level, output);
      output.pop();
      --level;
    }
  }
};
