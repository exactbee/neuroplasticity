/***
 Problem 2: Contains Duplicate
 https://leetcode.com/problems/contains-duplicate/
 Difficulty: Easy

 PROBLEM STATEMENT:
 Given an integer array `nums`, return `true` if any value appears at least
 twice in the array, and `false` if every element is distinct.

 EXAMPLES:
   Input:  nums = [1, 2, 3, 1]
   Output: true
   Reason: 1 appears at index 0 and index 3

   Input:  nums = [1, 2, 3, 4]
   Output: false
   Reason: all elements are distinct

   Input:  nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
   Output: true

 CONSTRAINTS:
   1 <= nums.length <= 10^5
   -10^9 <= nums[i] <= 10^9
***/

function containsDuplicate(nums: number[]): boolean {
  /*
   * Sorting Takes nlogn of time quick sort or merge sort.
   * Hashmap will take space O(n) space and lookup will take O(1) time
   * Since sorting needs another algorithm to use we will stuck with hashmap .
   * But there's a third approach but may fail for bigger size arrays :
   *  ValueIndexArr = An array of size nums length , each element with value Infinity initially
   *   Iterate through the nums array and put value count 1 if ValueIndexArr[value] is Infinity else increment the count.
   *   That's all if you see we are incrementing the count instead of just putting one we have found the duplicate
   */
  // const hashmap = new Map<number, number>();
  // for (const num of nums) {
  //   hashmap.set(num, (hashmap.get(num) ?? 0) + 1);
  //   if (hashmap.get(num)! > 1) return true;
  // }

  /*
   * You see there's an other data structure called Set. It's pretty unique.
   * If you try to put the same value in a set which is already there it won't change the set the duplicate values are discarded.
   * But if you put a value that isn't in set it will be added to the set .
   * Let's use set approach , it fits the scenario.
   * How : If are trying to find if duplicate is present
   * Before putting the value of the given array in set we will ask the set if it has this value in it.
   * If yes then we know that there a duplicate which we are inserting again in the set and we will return true since we found a duplicate.
   * Same logic like hashmap but underlying data structure is different.
   */

  const uniqueSet = new Set<number>();
  for (const num of nums) {
    if (uniqueSet.has(num)) return true;
    uniqueSet.add(num);
  }
  return false;
}

const inputs = [
  [1, 2, 3, 1],
  [1, 2, 3, 4],
  [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
];

for (const input of inputs) {
  console.log(input, containsDuplicate(input));
}
