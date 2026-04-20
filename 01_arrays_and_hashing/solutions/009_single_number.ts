/***
 Problem 9: Single Number
 https://leetcode.com/problems/single-number/
 Difficulty: Easy

 PROBLEM STATEMENT:
 Given a non-empty array of integers nums, every element appears twice except
 for one. Find that single one.

 You must implement a solution with linear runtime complexity and use only
 constant extra space.

 EXAMPLES:
   Input:  nums = [2,2,1]
   Output: 1
   Reason: 1 appears only once

   Input:  nums = [4,1,2,1,2]
   Output: 4
   Reason: 4 appears only once

   Input:  nums = [1]
   Output: 1
   Reason: only one element

 CONSTRAINTS:
   1 <= nums.length <= 3 * 10^4
   -3 * 10^4 <= nums[i] <= 3 * 10^4
   Each element appears twice except for exactly one element
***/

function singleNumber(nums: number[]): number {
  return nums.reduce((acc, n) => acc ^ n, 0);
  /*
 using hasmap
  */
  const countNums = new Map();
  for (const num of nums) {
    countNums.set(num, (countNums.get(num) ?? 0) + 1);
  }

  for (const [key, value] of countNums) {
    if (value === 1) {
      return key;
    }
  }
  return 0;

  /*
 using sorting :
  */

  nums.sort((a, b) => a - b);
  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i] != nums[i + 1]) return nums[i];
    i += 2;
  }

  return nums[nums.length - 1];

  /*
 using sets
 nums = [a,a,b,b,s]
 set(nums) = {a, b, s}
 eq : 2 * sum(set(nums)) - sum(nums)
    =  2(a + b + s) - (2a + 2b + s)
    =  2a + 2b + 2s - 2a  - 2b - s
    = s
  */

  const total = nums.reduce((a, b) => a + b, 0);
  const setSum = [...new Set(nums)].reduce((a, b) => a + b, 0);
  return 2 * setSum - total;
}

const tests: Array<{ nums: number[]; expected: number }> = [
  { nums: [2, 2, 1], expected: 1 },
  { nums: [4, 1, 2, 1, 2], expected: 4 },
  { nums: [1], expected: 1 }, // single element
  { nums: [-1, -1, -2], expected: -2 }, // negative numbers
  { nums: [0, 1, 0], expected: 1 }, // zero in array
];

for (const test of tests) {
  const result = singleNumber([...test.nums]);
  const pass = result === test.expected;
  console.log(
    `singleNumber([${test.nums}]) →`,
    result,
    pass ? "✓" : `✗ expected ${test.expected}`,
  );
}
