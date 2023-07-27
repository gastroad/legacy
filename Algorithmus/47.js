var permuteUnique = function(nums) {
  var ret = [];
  var lengthOfNums = nums.length;
  var result = [];
  backtrack(nums, 0, []);

  ret = ret.filter(val => {
    
  });

  console.log(ret);
  return ret;

  function backtrack(input, level, output) {
    for (var i = 0; i < input.length; i++) {
      output.push(input[i]);
      if (level == lengthOfNums - 1) {
        ret.push([...output]); // !important: need to push a new array, output will keep being modified
        output.pop(); // last level won't get to line 22, 23, so don't forget to update output and level here
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
