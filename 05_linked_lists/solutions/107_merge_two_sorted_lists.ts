/***
 Problem 107: Merge Two Sorted Lists
 https://leetcode.com/problems/merge-two-sorted-lists/
 Difficulty: Easy

 PROBLEM STATEMENT:
 You are given the heads of two sorted linked lists list1 and list2.
 Merge the two lists into one sorted list. The list should be made by
 splicing together the nodes of the first two lists.
 Return the head of the merged linked list.

 EXAMPLES:
   Input:  list1 = [1,2,4], list2 = [1,3,4]
   Output: [1,1,2,3,4,4]
   Reason: Nodes are picked in non-decreasing order from both lists.

   Input:  list1 = [], list2 = []
   Output: []
   Reason: Both lists are empty, so the merged list is empty.

   Input:  list1 = [], list2 = [0]
   Output: [0]
   Reason: When one list is empty, the other is returned unchanged.

 CONSTRAINTS:
   The number of nodes in both lists is in the range [0, 50].
   -100 <= Node.val <= 100
   Both list1 and list2 are sorted in non-decreasing order.
***/

class Node {
  val: number;
  next: Node | null;

  constructor(val: number, next: Node | null = null) {
    this.val = val;
    this.next = next;
  }
}

function buildList(arr: number[]): Node | null {
  if (arr.length === 0) return null;
  let head = new Node(arr[0]);
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    let curr = new Node(arr[i]);
    prev.next = curr;
    prev = curr;
  }
  return head;
}

function toArray(head: Node | null): number[] {
  const result: number[] = [];
  let curr = head;
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
  return result;
}

function solution(list1: Node | null, list2: Node | null): Node | null {
  let dummy = new Node(0);
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  tail.next = list1 ?? list2;

  return dummy.next;
}

const tests: Array<{ list1: number[]; list2: number[]; expected: number[] }> = [
  // from problem statement
  { list1: [1, 2, 4], list2: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] },
  { list1: [], list2: [], expected: [] },
  { list1: [], list2: [0], expected: [0] },
  // one list empty
  { list1: [5], list2: [], expected: [5] },
  { list1: [], list2: [-7], expected: [-7] },
  // single element each
  { list1: [1], list2: [2], expected: [1, 2] },
  { list1: [2], list2: [1], expected: [1, 2] },
  // fully disjoint ranges (no interleaving)
  { list1: [1, 2, 3], list2: [4, 5, 6], expected: [1, 2, 3, 4, 5, 6] },
  { list1: [4, 5, 6], list2: [1, 2, 3], expected: [1, 2, 3, 4, 5, 6] },
  // negative values and constraint bounds
  { list1: [-100, 0], list2: [-50, 100], expected: [-100, -50, 0, 100] },
  { list1: [-100, -100], list2: [-100], expected: [-100, -100, -100] },
  // duplicates across and within lists
  { list1: [2, 2, 2], list2: [2, 2], expected: [2, 2, 2, 2, 2] },
  { list1: [1, 1, 1], list2: [1, 1, 1], expected: [1, 1, 1, 1, 1, 1] },
  // uneven lengths — remainder must be spliced on
  { list1: [1], list2: [2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  { list1: [1, 2, 3, 4], list2: [5], expected: [1, 2, 3, 4, 5] },
  // perfectly interleaved
  { list1: [1, 3, 5, 7], list2: [2, 4, 6, 8], expected: [1, 2, 3, 4, 5, 6, 7, 8] },
];

for (const test of tests) {
  const result = toArray(solution(buildList(test.list1), buildList(test.list2)));
  const pass =
    result.length === test.expected.length &&
    result.every((v, i) => v === test.expected[i]);
  console.log(
    `solution([${test.list1}], [${test.list2}]) ->`,
    result,
    pass ? "OK" : `FAIL expected [${test.expected}]`,
  );
}
