/***
 Problem 6: Merge Sorted Array
 https://leetcode.com/problems/merge-sorted-array/
 Difficulty: Easy

 PROBLEM STATEMENT:
 You are given two integer arrays nums1 and nums2, sorted in non-decreasing
 order, and two integers m and n, representing the number of valid elements
 in nums1 and nums2 respectively.

 Merge nums2 into nums1 as one sorted array.

 NOTE: nums1 has a length of m + n, which means it has enough space to hold
 the additional elements from nums2. You must do this in-place with O(1)
 extra memory (not counting the space for the output array).

 EXAMPLES:
   Input:  nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
   Output: [1,2,2,3,5,6]
   Reason: After merging, the array is sorted and contains all elements

   Input:  nums1 = [1], m = 1, nums2 = [], n = 0
   Output: [1]
   Reason: Only nums1 has elements, nothing to merge

   Input:  nums1 = [0], m = 0, nums2 = [1], n = 1
   Output: [1]
   Reason: nums1 is empty, copy all of nums2

 CONSTRAINTS:
   nums1.length == m + n
   nums2.length == n
   0 <= m, n <= 200
   1 <= m + n <= 200
   -10^9 <= nums1[i], nums2[i] <= 10^9
***/

// Alternative: backwards iteration (i=m-1, j=n-1, p=m+n-1) avoids overwrite issues entirely
function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): Number[] {
  if (m === 0) return nums2;
  if (n === 0) return nums1;
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < n) {
    if (nums1[i] > nums2[j]) {
      [nums1[i], nums1[m + j]] = [nums2[j], nums1[i]];
      j++;
    }

    if (nums1[i] === 0 && j < n) {
      nums1[i] = nums2[j];
      j++;
    }

    i++;
  }
  return nums1;
}

const tests: Array<{
  nums1: number[];
  m: number;
  nums2: number[];
  n: number;
  expected: number[];
}> = [
  {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [2, 5, 6],
    n: 3,
    expected: [1, 2, 2, 3, 5, 6],
  },
  {
    nums1: [1],
    m: 1,
    nums2: [],
    n: 0,
    expected: [1],
  },
  {
    nums1: [0],
    m: 0,
    nums2: [1],
    n: 1,
    expected: [1],
  },
  {
    nums1: [4, 5, 6, 0, 0, 0],
    m: 3,
    nums2: [1, 2, 3],
    n: 3,
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    nums1: [1, 0],
    m: 1,
    nums2: [0],
    n: 1,
    expected: [0, 1],
  },
  {
    nums1: [0, 0, 1],
    m: 1,
    nums2: [2],
    n: 1,
    expected: [0, 1, 2],
  },
];

for (const test of tests) {
  const nums1Copy = [...test.nums1];
  const result = (
    merge(nums1Copy, test.m, test.nums2, test.n) as number[]
  ).slice(0, test.m + test.n);
  const pass =
    result.length === test.expected.length &&
    result.every((v, i) => v === test.expected[i]);
  console.log(
    `merge([${test.nums1}], ${test.m}, [${test.nums2}], ${test.n}) →`,
    result,
    pass ? "✓" : `✗ expected [${test.expected}]`,
  );
}
