/***
 Problem 8: Plus One
 https://leetcode.com/problems/plus-one/
 Difficulty: Easy

 PROBLEM STATEMENT:
 You are given a large integer represented as an integer array digits, where
 each digits[i] is the ith digit of the integer. The digits are ordered from
 most significant to least significant (left to right). The integer does not
 contain any leading zeros.

 Increment the large integer by one and return the resulting array of digits.

 EXAMPLES:
   Input:  digits = [1,2,3]
   Output: [1,2,4]
   Reason: 123 + 1 = 124

   Input:  digits = [4,3,2,1]
   Output: [4,3,2,2]
   Reason: 4321 + 1 = 4322

   Input:  digits = [9]
   Output: [1,0]
   Reason: 9 + 1 = 10, carries over into a new digit

 CONSTRAINTS:
   1 <= digits.length <= 100
   0 <= digits[i] <= 9
   digits does not contain any leading zeros
***/

function plusOne(digits: number[]): number[] {
  let carry = 1; // the +1 we're adding
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    digits[i] = sum > 9 ? 0 : sum;
    carry = sum > 9 ? 1 : 0;
  }
  return carry ? [carry, ...digits] : digits;
}

const tests: Array<{ digits: number[]; expected: number[] }> = [
  { digits: [1, 2, 3], expected: [1, 2, 4] },
  { digits: [4, 3, 2, 1], expected: [4, 3, 2, 2] },
  { digits: [9], expected: [1, 0] },
  { digits: [9, 9, 9], expected: [1, 0, 0, 0] }, // full carry propagation
  { digits: [1, 9, 9], expected: [2, 0, 0] }, // partial carry
  { digits: [0], expected: [1] }, // single zero
  { digits: [1, 8], expected: [1, 9] }, // result digit is 9, no carry
];

for (const test of tests) {
  const result = plusOne([...test.digits]);
  const pass =
    result.length === test.expected.length &&
    result.every((v, i) => v === test.expected[i]);
  console.log(
    `plusOne([${test.digits}]) →`,
    result,
    pass ? "✓" : `✗ expected [${test.expected}]`,
  );
}
