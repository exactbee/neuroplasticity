/***
 Problem 13: Encode and Decode Strings
 https://leetcode.com/problems/encode-and-decode-strings/
 Difficulty: Medium

 PROBLEM STATEMENT:
 Design an algorithm to encode a list of strings to a single string.
 The encoded string is then sent over the network and is decoded back
 to the original list of strings.

 Implement encode and decode functions such that:
   encode(strs) → single encoded string
   decode(encoded) → original list of strings

 EXAMPLES:
   Input:  ["hello", "world"]
   Output: ["hello", "world"]

   Input:  ["we", "say", ":", "yes"]
   Output: ["we", "say", ":", "yes"]

 CONSTRAINTS:
   0 <= strs.length <= 200
   0 <= strs[i].length <= 200
   strs[i] contains any possible character out of 256 valid ASCII characters.
   Do NOT use built-in serialization methods (JSON, eval, etc.).
***/

function encode(strs: string[]): string {
  let output: string = "";
  for (const s of strs) {
    output += `${s.length}#${s}`;
  }
  return output;
}

function decode(s: string): string[] {
  let output: string[] = [];
  let i = 0;
  while (i < s.length) {
    let len = "";
    while (s[i] !== "#") {
      len += s[i];
      i++;
    }
    let lenN = Number(len);
    output.push(s.slice(i + 1, i + 1 + lenN));
    i += 1 + lenN;
  }
  return output;
}

const tests: Array<{ input: string[] }> = [
  { input: ["hello", "world"] },
  { input: ["we", "say", ":", "yes"] },
  { input: [""] }, // edge: empty string in list
  { input: [] }, // edge: empty list
  { input: ["hello#world", "foo"] }, // edge: delimiter char inside string
  { input: ["123", "45#6", "##"] }, // edge: numbers and special chars
  { input: ["a".repeat(200)] }, // edge: max length string
];

for (const test of tests) {
  const encoded = encode([...test.input]);
  const result = decode(encoded);
  const pass = JSON.stringify(result) === JSON.stringify(test.input);
  console.log(
    `encode/decode(${JSON.stringify(test.input)}) →`,
    result,
    pass ? "✓" : `✗ expected ${JSON.stringify(test.input)}`,
  );
}
