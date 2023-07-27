/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = function (nums, k) {
  const counts = new Map()
  for (let num of nums) {
    counts.set(num, counts.has(num) ? counts.get(num) + 1 : 1);
  }
  return Array.from(counts.keys()).sort((num1, num2) => counts.get(num2) - counts.get(num1)).slice(0, k)
};

