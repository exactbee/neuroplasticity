/***
 Problem 10: Intersection of Two Arrays II
 https://leetcode.com/problems/intersection-of-two-arrays-ii/
 Difficulty: Easy

 PROBLEM STATEMENT:
 Given two integer arrays nums1 and nums2, return an array of their
 intersection. Each element in the result must appear as many times as
 it shows in both arrays. You may return the result in any order.

 EXAMPLES:
   Input:  nums1 = [1,2,2,1], nums2 = [2,2]
   Output: [2,2]

   Input:  nums1 = [4,9,5], nums2 = [9,4,9,8,4]
   Output: [4,9]
   Reason: 4 appears once in nums1 and twice in nums2 → take 1; same for 9

 CONSTRAINTS:
   1 <= nums1.length, nums2.length <= 1000
   0 <= nums1[i], nums2[i] <= 1000
***/

function intersect(nums1: number[], nums2: number[]): number[] {
  const res: number[] = [];
  // const nums1_feq = new Map();
  // const nums2_feq = new Map();
  // for (const n of nums1) {
  //   nums1_feq.set(n, (nums1_feq.get(n) ?? 0) + 1);
  // }

  // for (const n of nums2) {
  //   nums2_feq.set(n, (nums2_feq.get(n) ?? 0) + 1);
  // }

  // for (const [n, count] of nums1_feq) {
  //   if (nums2_feq.get(n)) {
  //     res.push(
  //       ...Array.from({ length: Math.min(nums2_feq.get(n), count) }, () => n),
  //     );
  //   }
  // }
  // return res;

  /*
  single-map shape : build freq of shorter array -> iterate longer array
  */

  const lnums: number[] = nums1.length >= nums2.length ? nums1 : nums2;
  const snums: number[] = nums1.length < nums2.length ? nums1 : nums2;

  const snums_freq = new Map<number, number>();
  for (const n of snums) {
    snums_freq.set(n, (snums_freq.get(n) ?? 0) + 1);
  }

  for (const n of lnums) {
    if (snums_freq.get(n)) {
      res.push(n);
      snums_freq.set(n, snums_freq.get(n)! - 1);
    }
  }

  return res;
}

const tests: Array<{ nums1: number[]; nums2: number[]; expected: number[] }> = [
  { nums1: [1, 2, 2, 1], nums2: [2, 2], expected: [2, 2] },
  { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4], expected: [4, 9] },
  { nums1: [1], nums2: [1], expected: [1] }, // single element
  { nums1: [1, 2], nums2: [3, 4], expected: [] }, // no overlap
  { nums1: [3, 3, 3], nums2: [3, 3], expected: [3, 3] }, // duplicates capped by min
];

const sort = (a: number[]) => [...a].sort((x, y) => x - y).join(",");

for (const test of tests) {
  const result = intersect([...test.nums1], [...test.nums2]);
  const pass = sort(result) === sort(test.expected);
  console.log(
    `intersect([${test.nums1}], [${test.nums2}]) →`,
    result,
    pass ? "✓" : `✗ expected [${test.expected}]`,
  );
}
