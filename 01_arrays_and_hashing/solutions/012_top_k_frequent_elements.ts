/***
 Problem 12: Top K Frequent Elements
 https://leetcode.com/problems/top-k-frequent-elements/
 Difficulty: Medium

 PROBLEM STATEMENT:
 Given an integer array nums and an integer k, return the k most frequent
 elements. You may return the answer in any order.

 EXAMPLES:
   Input:  nums = [1,1,1,2,2,3], k = 2
   Output: [1,2]
   Reason: 1 appears 3 times, 2 appears 2 times — top 2 most frequent

   Input:  nums = [1], k = 1
   Output: [1]

 CONSTRAINTS:
   1 <= nums.length <= 10^5
   -10^4 <= nums[i] <= 10^4
   k is in the range [1, number of unique elements in nums]
   It is guaranteed that the answer is unique.
   Follow up: Your algorithm's time complexity must be better than O(n log n).
***/

function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  const bucket: number[][] = new Array(Math.max(...freq.values()) + 1)
    .fill(null)
    .map(() => []);

  for (const [key, value] of freq) {
    bucket[value].push(key);
  }
  const res: number[] = [];
  for (let i = bucket.length - 1; i >= 0 && res.length < k; i--)
    res.push(...bucket[i]);

  return res;
}

const tests: Array<{ nums: number[]; k: number; expected: number[] }> = [
  { nums: [1, 1, 1, 2, 2, 3], k: 2, expected: [1, 2] }, // basic
  { nums: [1], k: 1, expected: [1] }, // single element
  { nums: [4, 4, 4, 6, 6, 7], k: 1, expected: [4] }, // k=1, clear winner
  { nums: [-1, -1, 2, 2, 3], k: 2, expected: [-1, 2] }, // negative numbers
  { nums: [0, 0, 1, 1, 2], k: 2, expected: [0, 1] }, // zero in array
  { nums: [5, 5, 5, 5], k: 1, expected: [5] }, // all same element
  { nums: [1, 1, 2, 2, 3, 3, 4], k: 3, expected: [1, 2, 3] }, // k = num unique - 1
  { nums: [1, 1, 2, 3, 4], k: 4, expected: [1, 2, 3, 4] }, // k = all unique elements
];

const sort = (a: number[]) => [...a].sort((x, y) => x - y).join(",");

for (const test of tests) {
  const result = topKFrequent([...test.nums], test.k);
  const pass = sort(result) === sort(test.expected);
  console.log(
    `topKFrequent([${test.nums}], ${test.k}) →`,
    result,
    pass ? "✓" : `✗ expected [${test.expected}]`,
  );
}
