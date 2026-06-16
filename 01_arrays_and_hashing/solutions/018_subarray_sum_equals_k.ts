/***
 Problem 18: Subarray Sum Equals K
 https://leetcode.com/problems/subarray-sum-equals-k/
 Difficulty: Medium

 PROBLEM STATEMENT:
 Given an array of integers nums and an integer k, return the total number
 of subarrays whose sum equals to k.

 A subarray is a contiguous non-empty sequence of elements within an array.

 EXAMPLES:
   Input:  nums = [1,1,1], k = 2
   Output: 2
   Reason: [1,1] appears twice (indices 0–1 and 1–2).

   Input:  nums = [1,2,3], k = 3
   Output: 2
   Reason: [3] at index 2, and [1,2] at indices 0–1.

 CONSTRAINTS:
   1 <= nums.length <= 2 * 10^4
   -1000 <= nums[i] <= 1000
   -10^7 <= k <= 10^7
***/

function subarraySum(nums: number[], k: number): number {
  // TODO
  return 0;
}

const tests: Array<{ nums: number[]; k: number; expected: number }> = [
  { nums: [1, 1, 1], k: 2, expected: 2 },
  { nums: [1, 2, 3], k: 3, expected: 2 },
  { nums: [1], k: 1, expected: 1 },           // single element equals k
  { nums: [1], k: 0, expected: 0 },           // single element, no match
  { nums: [0, 0, 0], k: 0, expected: 6 },     // all zeros, every subarray sums to 0
  { nums: [-1, -1, 1], k: 0, expected: 1 },   // negative numbers
  { nums: [3, 4, 7, 2, -3, 1, 4, 2], k: 7, expected: 4 },
];

for (const test of tests) {
  const result = subarraySum([...test.nums], test.k);
  const pass = result === test.expected;
  console.log(
    `subarraySum([${test.nums}], ${test.k}) ->`,
    result,
    pass ? "OK" : `FAIL expected ${test.expected}`,
  );
}
