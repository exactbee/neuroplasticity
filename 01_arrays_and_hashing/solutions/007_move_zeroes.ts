/***
 Problem 7: Move Zeroes
 https://leetcode.com/problems/move-zeroes/
 Difficulty: Easy

 PROBLEM STATEMENT:
 Given an integer array nums, move all 0's to the end of it while maintaining
 the relative order of the non-zero elements.

 Note that you must do this in-place without making a copy of the array.

 EXAMPLES:
   Input:  nums = [0,1,0,3,12]
   Output: [1,3,12,0,0]
   Reason: Non-zero elements keep their order; zeros are pushed to the end

   Input:  nums = [0]
   Output: [0]
   Reason: Single zero stays in place

   Input:  nums = [1,2,3]
   Output: [1,2,3]
   Reason: No zeros to move

 CONSTRAINTS:
   1 <= nums.length <= 10^4
   -2^31 <= nums[i] <= 2^31 - 1

 FOLLOW UP:
   Could you minimize the total number of operations done?
***/

function moveZeroes(nums: number[]): void {
  // my appraoch

  let i: number = 0;
  let j: any = undefined;
  while (i < nums.length) {
    if (nums[i] != 0) {
      if (j != undefined) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        j = j + 1;
      }
    }
    if (nums[i] === 0 && j === undefined) {
      j = i;
    }
    i++;
  }

  /*
  rewrite with AI for better readability
  let nextZero = -1;

   for (let i = 0; i < nums.length; i++) {
     if (nums[i] === 0 && nextZero === -1) {
       nextZero = i;
     }

     if (nums[i] !== 0 && nextZero !== -1) {
       [nums[i], nums[nextZero]] = [nums[nextZero], nums[i]];
       nextZero++;
     }
   }
  */

  // standard : slow and fast pointer appraoch
  /*
  let slow: number = 0;
  for (let fast: number = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow++] = nums[fast];
    }
  }
  while (slow < nums.length) {
    nums[slow++] = 0;
  }
   */
}

const tests: Array<{ nums: number[]; expected: number[] }> = [
  { nums: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
  { nums: [0], expected: [0] },
  { nums: [1, 2, 3], expected: [1, 2, 3] },
  { nums: [0, 0, 0, 1], expected: [1, 0, 0, 0] },
  { nums: [1, 0, 0, 0], expected: [1, 0, 0, 0] },
];

for (const test of tests) {
  const numsCopy = [...test.nums];
  moveZeroes(numsCopy);
  const pass =
    numsCopy.length === test.expected.length &&
    numsCopy.every((v, i) => v === test.expected[i]);
  console.log(
    `moveZeroes([${test.nums}]) →`,
    numsCopy,
    pass ? "✓" : `✗ expected [${test.expected}]`,
  );
}
