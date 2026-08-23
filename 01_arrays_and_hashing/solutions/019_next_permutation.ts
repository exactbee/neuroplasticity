/***
 Problem 19: Next Permutation
 https://leetcode.com/problems/next-permutation/
 Difficulty: Medium

 PROBLEM STATEMENT:
 A permutation of an array of integers is an arrangement of its members
 into a sequence or linear order.

 The next permutation of an array of integers is the next lexicographically
 greater permutation of its integers. If such an arrangement is not possible,
 the array must be rearranged to the lowest possible order (i.e., sorted in
 ascending order).

 Given an array of integers nums, find the next permutation of nums.
 The replacement must be in place and use only constant extra memory.

 EXAMPLES:
   Input:  nums = [1,2,3]
   Output: [1,3,2]
   Reason: The next lexicographic arrangement after [1,2,3] is [1,3,2].

   Input:  nums = [3,2,1]
   Output: [1,2,3]
   Reason: [3,2,1] is the largest permutation, so it wraps to the smallest.

   Input:  nums = [1,1,5]
   Output: [1,5,1]
   Reason: The next arrangement greater than [1,1,5] is [1,5,1].

 CONSTRAINTS:
   1 <= nums.length <= 100
   0 <= nums[i] <= 100
***/

function nextPermutation(nums: number[]): void {
  // ques to ask : can the digit at the position i - 1 be made bigger by using something on the right?
  //               if yes, find the smallest digit on the right that is larger than nums[i - 1] and swap them.
  let pIndex = null;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i - 1] < nums[i]) {
      pIndex = i - 1;
      let r = nums.length - 1;
      while (nums[pIndex] >= nums[r]) {
        r--;
      }
      [nums[i - 1], nums[r]] = [nums[r], nums[i - 1]];
      reverseWindow(nums, pIndex + 1, nums.length - 1);

      break;
    }
  }

  if (pIndex === null) {
    reverseWindow(nums)
  }
}

function reverseWindow(arr: number[], sp: number = 0, ep: number = arr.length - 1 ): number[] {
  if (!arr) throw "Array argument is missing";
  while (sp < ep) {
    [arr[sp], arr[ep]] = [arr[ep], arr[sp]];
    sp++;
    ep--;
  }
  return arr;
}

const tests: Array<{ nums: number[]; expected: number[] }> = [
  { nums: [1, 2, 3], expected: [1, 3, 2] },
  { nums: [3, 2, 1], expected: [1, 2, 3] },
  { nums: [1, 1, 5], expected: [1, 5, 1] },
  { nums: [1], expected: [1] },
  { nums: [1, 2], expected: [2, 1] },
  { nums: [2, 1], expected: [1, 2] },
  { nums: [1, 3, 2], expected: [2, 1, 3] },
  { nums: [2, 3, 1], expected: [3, 1, 2] },
  { nums: [1, 5, 1], expected: [5, 1, 1] },
  { nums: [2, 2, 0, 4, 3, 1], expected: [2, 2, 1, 0, 3, 4] },
  { nums: [1, 2, 3, 4, 5], expected: [1, 2, 3, 5, 4] },
  { nums: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
];

for (const test of tests) {
  const nums = [...test.nums];
  nextPermutation(nums);
  const pass =
    nums.length === test.expected.length &&
    nums.every((v, i) => v === test.expected[i]);
  console.log(
    `nextPermutation([${test.nums}]) ->`,
    nums,
    pass ? "OK" : `FAIL expected [${test.expected}]`,
  );
}
