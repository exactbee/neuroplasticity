/***
 Problem 11: Product of Array Except Self
 https://leetcode.com/problems/product-of-array-except-self/
 Difficulty: Medium

 PROBLEM STATEMENT:
 Given an integer array nums, return an array answer such that answer[i] is equal
 to the product of all the elements of nums except nums[i].

 The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 You must write an algorithm that runs in O(n) time and without using the division operation.

 EXAMPLES:
   Input:  nums = [1, 2, 3, 4]
   Output: [24, 12, 8, 6]
   Reason: answer[0] = 2*3*4 = 24, answer[1] = 1*3*4 = 12, etc.

   Input:  nums = [-1, 1, 0, -3, 3]
   Output: [0, 0, 9, 0, 0]

 CONSTRAINTS:
   2 <= nums.length <= 10^5
   -30 <= nums[i] <= 30
   The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
   Follow up: Can you solve it in O(1) extra space (output array does not count)?
***/

function productExceptSelf(nums: number[]): number[] {
  /*
 // division solution

  let prod_all = 1;
  let zeroIndex = null;
  for (const [i, num] of nums.entries()) {
    if (num === 0) {
      if (zeroIndex !== null) {
        nums.fill(0);
        return nums;
      }
      zeroIndex = i;
      continue;
    }
    prod_all *= num;
  }

  if (zeroIndex !== null) {
    nums.fill(0);
    nums[zeroIndex] = prod_all;
    return nums;
  }

  for (const [i, num] of nums.entries()) {
    nums[i] = prod_all / num;
  }

  return nums;
   */

  /*
 multiplication solution using prefix and suffix products


  const suffix_product = [1];
  const prefix_product = [1];
  const n = nums.length - 1;
  let pp = 1;
  let sp = 1;
  for (const [i, num] of nums.entries()) {
    sp *= nums[n - i];
    pp *= num;
    suffix_product.push(sp);
    prefix_product.push(pp);
  }

  for (const [i, _num] of nums.entries()) {
    nums[i] = prefix_product[i] * suffix_product[n - i];
  }
  return nums;

  */

  /*
 using running aggregate technique or one pass technique
  */
  const prefix_prod = [1];
  const n = nums.length - 1;
  let pp = 1;
  let sp = 1;
  for (let i = 0; i < n; i++) {
    pp *= nums[i];
    prefix_prod.push(pp);
  }

  for (let i = n; i >= 0; i--) {
    prefix_prod[i] = sp * prefix_prod[i];
    sp *= nums[i];
  }

  return prefix_prod;
}

const tests: Array<{ nums: number[]; expected: number[] }> = [
  { nums: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
  { nums: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0] },
  { nums: [2, 3], expected: [3, 2] }, // edge: two elements
  { nums: [0, 0], expected: [0, 0] }, // edge: all zeros
  { nums: [-1, 2, -3], expected: [-6, 3, -2] }, // edge: negative result
];

for (const test of tests) {
  const result = productExceptSelf([...test.nums]);
  const pass = result.join(",") === test.expected.join(",");
  console.log(
    `productExceptSelf([${test.nums}]) →`,
    result,
    pass ? "✓" : `✗ expected [${test.expected}]`,
  );
}
