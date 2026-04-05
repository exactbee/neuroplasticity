/***
 Problem 3: Valid Anagram
 https://leetcode.com/problems/valid-anagram/
 Difficulty: Easy

 PROBLEM STATEMENT:
 Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`,
 and `false` otherwise.
 An anagram is a word formed by rearranging all letters of another word,
 using each original letter exactly once.

 EXAMPLES:
   Input:  s = "anagram", t = "nagaram"
   Output: true
   Reason: "nagaram" uses exactly the same letters as "anagram"

   Input:  s = "rat", t = "car"
   Output: false
   Reason: "car" has a 'c' which "rat" does not have

   Input:  s = "a", t = "ab"
   Output: false
   Reason: lengths differ, "ab" has an extra 'b'

 CONSTRAINTS:
   1 <= s.length, t.length <= 5 * 10^4
   s and t consist of lowercase English letters
***/

function isAnagram(s: string, t: string): boolean {
  /*
   * We are using hashmap here again to check the count(frequency) of each character .
   * we take one of the string (we can take the string of shorter length to improve efficiency) and create a hashmap for it
   * We then iterate over the other given string .
   * We check if the element of other string is present in hashmap or not , if not we return false, if yes we reduce the count of that element by one.
   * We then check if the element count is 0 or less then zero we delete the element so on next check we don't see the same element .
   *
   */
  const freqS = new Map<string, number>();
  if (s.length != t.length) return false;
  for (const char of s) {
    freqS.set(char, (freqS.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    if (!freqS.has(char)) return false;
    freqS.set(char, (freqS.get(char) ?? 0) - 1);
    if (freqS.has(char) && freqS.get(char)! <= 0) {
      freqS.delete(char);
    }
  }

  return true;

  /*
   * Another approach is using a two arrays of length 26 instead of hashmap.
   * Since the string will be all in small letters from a-z and the map indexes like this way :
   *  a : 0, b: 1 .. so on to z : 25
   * Now When we iterate over the first string , we will increase the count of the index where element maps to otherwise it remains zero
   * We do the same with other string and then compare the both array to equal values on the indexes.
   */

  const arrS = Array(26).fill(0);
  const arrT = Array(26).fill(0);

  for (const char of s) {
    const index = char.charCodeAt(0) - 97;
    arrS[index]++;
  }

  for (const char of t) {
    const index = char.charCodeAt(0) - 97;
    arrT[index]++;
  }

  for (let i = 0; i < arrS.length; i++) {
    if (arrS[i] != arrT[i]) return false;
  }

  return true;
}

const inputs: [string, string][] = [
  ["anagram", "nagaram"],
  ["rat", "car"],
  ["a", "ab"],
  ["listen", "silent"],
  ["hello", "world"],
];

for (const [s, t] of inputs) {
  console.log(`isAnagram("${s}", "${t}") →`, isAnagram(s, t));
}
