var combinationSum = function(candidates, target) {
  // we don't need to consider numbers > target
  const sorted = candidates.filter(e => e <= target).sort((a, b) => a - b);
  const results = [];

  const helper = (arr, sum, i) => {
    if (i >= sorted.length || sum + sorted[i] > target) {
      return;
    }
    const arrIfTake = [...arr, sorted[i]];
    const sumIfTake = sum + sorted[i];

    if (sumIfTake === target) {
      results.push(arrIfTake);
      return;
    }

    // take, we have the option of taking again
    helper(arrIfTake, sumIfTake, i);

    // leave, we no longer need to consider this number
    helper(arr, sum, i + 1);
  };

  // start with empty array, 0 sum, index 0
  helper([], 0, 0);
  return results;
};
