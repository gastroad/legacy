var maxSubArray = function(nums) {
  var max = -2147483648;
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1] > nums[i] ? nums[i] + nums[i - 1] : nums[i];
    max = nums[i] > max ? nums[i] : max;
  }
  return max;
};

// return nums.reduce((q, w) => q ^ w, 0);