/***
 Problem 17: Container With Most Water
 https://leetcode.com/problems/container-with-most-water/
 Difficulty: Medium

 PROBLEM STATEMENT:
 You are given an integer array height of length n. There are n vertical lines
 drawn such that the two endpoints of the i-th line are (i, 0) and (i, height[i]).

 Find two lines that together with the x-axis form a container, such that the
 container contains the most water.

 Return the maximum amount of water a container can store.

 Notice that you may not slant the container.

 EXAMPLES:
   Input:  height = [1,8,6,2,5,4,8,3,7]
   Output: 49
   Reason: The max area is formed by lines at index 1 and 8:
     width = 8 - 1 = 7
     minHeight = min(8, 7) = 7
     area = 7 * 7 = 49

   Input:  height = [1,1]
   Output: 1
   Reason: width = 1, minHeight = 1, so area = 1.

 CONSTRAINTS:
   n == height.length
   2 <= n <= 10^5
   0 <= height[i] <= 10^4
***/

function maxArea(height: number[]): number {
  let area = 0;
  let [l, r] = [0, height.length - 1];
  while (l < r) {
    let width = Math.abs(r - l);
    let minHeight = Math.min(height[l], height[r]);
    area = Math.max(area, width * minHeight);

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return area;
}

const tests: Array<{ height: number[]; expected: number }> = [
  { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
  { height: [1, 1], expected: 1 },
  { height: [4, 3, 2, 1, 4], expected: 16 },
  { height: [1, 2, 1], expected: 2 },
  { height: [0, 2, 0], expected: 0 },
  { height: [2, 3, 10, 5, 7, 8, 9], expected: 36 },
  { height: [1, 3, 2, 5, 25, 24, 5], expected: 24 },
];

for (const test of tests) {
  const result = maxArea([...test.height]);
  const pass = result === test.expected;
  console.log(
    `maxArea([${test.height}]) ->`,
    result,
    pass ? "OK" : `FAIL expected ${test.expected}`,
  );
}
