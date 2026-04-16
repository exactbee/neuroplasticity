/***
 Problem 5: Maximum Subarray
 https://leetcode.com/problems/maximum-subarray/
 Difficulty: Medium

 PROBLEM STATEMENT:
 Given an integer array `nums`, find the subarray with the largest sum,
 and return its sum.

 EXAMPLES:
   Input:  nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
   Output: 6
   Reason: Subarray [4, -1, 2, 1] has the largest sum = 6

   Input:  nums = [1]
   Output: 1
   Reason: Only one element, the subarray is [1]

   Input:  nums = [5, 4, -1, 7, 8]
   Output: 23
   Reason: Subarray [5, 4, -1, 7, 8] has the largest sum = 23

 CONSTRAINTS:
   1 <= nums.length <= 10^5
   -10^4 <= nums[i] <= 10^4
***/

function maxSubArray(nums: number[]): number {
  /*
   * BRUTE FORCE — O(n^2), kept for reference
   * ----------------------------------------
   * Try every starting index `i`, extend rightward with a running sum,
   * and track the best seen. Correct but too slow for n = 10^5.
   *
   *   let lsum = -Infinity;
   *   for (let i = 0; i < nums.length; i++) {
   *     let running = 0;
   *     for (let j = i; j < nums.length; j++) {
   *       running += nums[j];
   *       lsum = Math.max(lsum, running);
   *     }
   *   }
   *   return lsum;
   *
   * KADANE'S ALGORITHM — a short history
   * ------------------------------------
   * In 1977, Ulf Grenander (Brown University) was working on pattern
   * recognition in digital images and posed the 2D maximum-subarray
   * problem. His best approach at the time was brute force, O(n^6),
   * and he wondered whether a linear-time version of the 1D case
   * existed at all.
   *
   * Jay Kadane, a statistician at Carnegie Mellon, reportedly solved
   * the 1D version in under a minute during a hallway conversation —
   * producing the O(n) algorithm below. Jon Bentley later popularized
   * it in his "Programming Pearls" column (CACM, 1984), which is how
   * most programmers first encounter it today.
   *
   * THE INSIGHT:
   * Walking left-to-right, at every index you have only two choices:
   *   (a) EXTEND the subarray that ended at the previous index, OR
   *   (b) THROW IT AWAY and start fresh at the current index.
   *
   * Choice (b) is correct exactly when the running sum has gone
   * negative: any future subarray that drags a negative prefix along
   * is strictly worse than the same subarray starting fresh after it.
   *
   * So the loop maintains two values:
   *   `current` — best sum of a subarray ENDING at this index
   *   `lsum`    — best sum seen ANYWHERE so far
   *
   * `lsum` starts at -Infinity so an all-negative array (e.g. [-1,-2,-3])
   * still returns the least-negative element rather than 0 — the empty
   * subarray is NOT allowed by this problem's constraints.
   *
   * This is arguably the cleanest introductory example of dynamic
   * programming: one pass, O(1) memory, one local decision per element.
   */
  let lsum = -Infinity;
  let current = 0;
  for (const n of nums) {
    current += n;
    lsum = Math.max(current, lsum);
    if (current < 0) current = 0;
  }
  return lsum;
}

const inputs: number[][] = [
  [-2, 1, -3, 4, -1, 2, 1, -5, 4], // 6
  [1], // 1
  [5, 4, -1, 7, 8], // 23
  [-1, -2, -3], // -1 (all negative, best is least negative)
];

for (const nums of inputs) {
  console.log(`maxSubArray([${nums}]) →`, maxSubArray(nums));
}
