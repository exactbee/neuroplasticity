/***
 Problem 16: 3Sum
 https://leetcode.com/problems/3sum/
 Difficulty: Medium

 PROBLEM STATEMENT:
 Given an integer array nums, return all the triplets
 [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and
 nums[i] + nums[j] + nums[k] == 0.

 Notice that the solution set must not contain duplicate triplets.

 EXAMPLES:
   Input:  nums = [-1,0,1,2,-1,-4]
   Output: [[-1,-1,2],[-1,0,1]]
   Reason:
     nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
     nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
     nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
     The distinct triplets are [-1,0,1] and [-1,-1,2].

   Input:  nums = [0,1,1]
   Output: []
   Reason: The only possible triplet does not sum up to 0.

   Input:  nums = [0,0,0]
   Output: [[0,0,0]]
   Reason: The only possible triplet sums up to 0.

 CONSTRAINTS:
   3 <= nums.length <= 3000
   -10^5 <= nums[i] <= 10^5
***/

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) break;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

function normalizeTriplets(triplets: number[][]): string[] {
  return triplets
    .map((triplet) => [...triplet].sort((a, b) => a - b).join(","))
    .sort();
}

const tests: Array<{ nums: number[]; expected: number[][] }> = [
  {
    nums: [-1, 0, 1, 2, -1, -4],
    expected: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  { nums: [0, 1, 1], expected: [] }, // no valid triplet
  { nums: [0, 0, 0], expected: [[0, 0, 0]] }, // exactly one triplet
  { nums: [0, 0, 0, 0], expected: [[0, 0, 0]] }, // duplicate triplets skipped
  {
    nums: [-2, 0, 1, 1, 2],
    expected: [
      [-2, 0, 2],
      [-2, 1, 1],
    ],
  },
  { nums: [1, 2, -2, -1], expected: [] }, // no zero-sum triplet
  {
    nums: [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4],
    expected: [
      [-4, 0, 4],
      [-4, 1, 3],
      [-4, 2, 2],
      [-2, -2, 4],
      [-2, 0, 2],
    ],
  },
];

for (const test of tests) {
  const result = threeSum([...test.nums]);
  const pass =
    normalizeTriplets(result).join("|") ===
    normalizeTriplets(test.expected).join("|");

  console.log(
    `threeSum([${test.nums}]) ->`,
    result,
    pass ? "OK" : `FAIL expected ${JSON.stringify(test.expected)}`,
  );
}
