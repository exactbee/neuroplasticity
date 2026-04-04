/***
 Problem 1: Two Sum
 https://leetcode.com/problems/two-sum/
 Difficulty: Easy

 PROBLEM STATEMENT:
 Given an array of integers `nums` and an integer `target`, return the indices
 of the two numbers that add up to `target`.
 You may assume exactly one solution exists, and you may not use the same element twice.
 You can return the answer in any order.

 EXAMPLES:
   Input:  nums = [2, 7, 11, 15], target = 9
   Output: [0, 1]
   Reason: nums[0] + nums[1] = 2 + 7 = 9

   Input:  nums = [3, 2, 4], target = 6
   Output: [1, 2]
   Reason: nums[1] + nums[2] = 2 + 4 = 6

   Input:  nums = [3, 3], target = 6
   Output: [0, 1]

 CONSTRAINTS:
   2 <= nums.length <= 10^4
   -10^9 <= nums[i] <= 10^9
   -10^9 <= target <= 10^9
   Only one valid answer exists.
***/

function twoSum(nums: number[], target: number): number[] {
  /***
   * Using double iteration and skipping self sum, repeated sum and number larger than target
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
  ***/
  /*
   * Given target and inputs
   * x + y = target
   * Since target is known and if i iterate over the array one element will be known say x then
   * y = target - x
   * Now we need to calculate why but we shouldn't iterate the array again so we will use a data structure called hashmap
   * hashmap gives us a way to find a element in just O(1) i.e  We will find a element in one ask without iterating .
   */

  const hashmap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const y = target - nums[i];
    if (hashmap.has(y)) return [i, hashmap.get(y)!];
    hashmap.set(nums[i], i);
  }

  /*
   * The order of the code matters here since if i first put the element in hashmap and then calculate the value of y --
   * Sometimes the target could be the double of a value, say target is 6 and array is [3,2,4] .
   * Now if we  first pushed the 3 value in the hashmap and then calculate the y (6 - current element which is 3) = 3,
   * it's the same number which is current element
   */

  return [];
}

const inputs = [
  [2, 7, 11, 15],
  [3, 2, 4],
  [3, 4],
  [3, 4, 5, 6, 7, 8],
];
const targets = [9, 6, 7, 11];

for (let i = 0; i < inputs.length; i++) {
  console.log(twoSum(inputs[i], targets[i]));
}
