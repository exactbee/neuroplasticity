/***
 Problem 15: Group Anagrams
 https://leetcode.com/problems/group-anagrams/
 Difficulty: Medium

 PROBLEM STATEMENT:
 Given an array of strings strs, group the anagrams together.
 You can return the answer in any order.

 An Anagram is a word or phrase formed by rearranging the letters of a
 different word or phrase, typically using all the original letters exactly once.

 EXAMPLES:
   Input:  strs = ["eat","tea","tan","ate","nat","bat"]
   Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
   Reason:
     - There is no string in strs that can be rearranged to form "bat".
     - The strings "nat" and "tan" are anagrams.
     - The strings "ate", "eat", and "tea" are anagrams.

   Input:  strs = [""]
   Output: [[""]]

   Input:  strs = ["a"]
   Output: [["a"]]

 CONSTRAINTS:
   1 <= strs.length <= 10^4
   0 <= strs[i].length <= 100
   strs[i] consists of lowercase English letters.
***/

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key)!.push(str);
  }
  return Array.from(map.values());
}

function normalizeGroups(groups: string[][]): string[] {
  return groups.map((group) => [...group].sort().join(",")).sort();
}

const tests: Array<{ strs: string[]; expected: string[][] }> = [
  {
    strs: ["eat", "tea", "tan", "ate", "nat", "bat"],
    expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
  },
  { strs: [""], expected: [[""]] }, // edge: empty string
  { strs: ["a"], expected: [["a"]] }, // edge: single string
  { strs: ["", ""], expected: [["", ""]] }, // repeated empty strings
  {
    strs: ["abc", "bca", "cab", "xyz", "zyx"],
    expected: [
      ["abc", "bca", "cab"],
      ["xyz", "zyx"],
    ],
  },
  { strs: ["aa", "aa", "bb"], expected: [["aa", "aa"], ["bb"]] }, // duplicates
  {
    strs: ["ab", "ba", "abc", "cab", "bac", "z"],
    expected: [["ab", "ba"], ["abc", "cab", "bac"], ["z"]],
  },
];

for (const test of tests) {
  const result = groupAnagrams([...test.strs]);
  const pass =
    normalizeGroups(result).join("|") ===
    normalizeGroups(test.expected).join("|");

  console.log(
    `groupAnagrams(${JSON.stringify(test.strs)}) ->`,
    result,
    pass ? "OK" : `FAIL expected ${JSON.stringify(test.expected)}`,
  );
}
