/***
 Problem 14: Longest Consecutive Sequence
 https://leetcode.com/problems/longest-consecutive-sequence/
 Difficulty: Medium

 PROBLEM STATEMENT:
 Given an unsorted array of integers nums, return the length of the longest
 consecutive elements sequence.

 You must write an algorithm that runs in O(n) time.

 EXAMPLES:
   Input:  nums = [100, 4, 200, 1, 3, 2]
   Output: 4
   Reason: The longest consecutive sequence is [1, 2, 3, 4].

   Input:  nums = [0,3,7,2,5,8,4,6,0,1]
   Output: 9

   Input:  nums = [1,0,1,2]
   Output: 3

 CONSTRAINTS:
   0 <= nums.length <= 10^5
   -10^9 <= nums[i] <= 10^9
***/

function longestConsecutive(nums: number[]): number {
  const setNums = new Set<number>(nums);
  let maxLen = 0;
  for (const num of setNums) {
    if (setNums.has(num - 1)) continue;
    let curr = num;
    let len = 1;
    while (setNums.has(curr + 1)) {
      curr += 1;
      len += 1;
    }
    maxLen = Math.max(len, maxLen);
  }

  return maxLen;
}

const tests: Array<{ nums: number[]; expected: number }> = [
  { nums: [100, 4, 200, 1, 3, 2], expected: 4 }, // basic
  { nums: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9 }, // duplicate zero
  { nums: [1, 0, 1, 2], expected: 3 }, // duplicate inside sequence
  { nums: [], expected: 0 }, // edge: empty array
  { nums: [1], expected: 1 }, // edge: single element
  { nums: [5, 5, 5], expected: 1 }, // all duplicates
  { nums: [-3, -2, -1, 0, 2], expected: 4 }, // negative numbers
  { nums: [10, 30, 20], expected: 1 }, // no consecutive neighbors
];

for (const test of tests) {
  const result = longestConsecutive([...test.nums]);
  const pass = result === test.expected;
  console.log(
    `longestConsecutive([${test.nums}]) ->`,
    result,
    pass ? "OK" : `FAIL expected ${test.expected}`,
  );
}
