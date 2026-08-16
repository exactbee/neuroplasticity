/***
 Problem 108: Linked List Cycle
 https://leetcode.com/problems/linked-list-cycle/
 Difficulty: Easy

 PROBLEM STATEMENT:
 Given head, the head of a linked list, determine if the linked list
 has a cycle in it.
 There is a cycle in a linked list if there is some node in the list
 that can be reached again by continuously following the next pointer.
 Internally, pos is used to denote the index of the node that the tail's
 next pointer is connected to. Note that pos is not passed as a parameter.
 Return true if there is a cycle in the linked list. Otherwise, return false.

 EXAMPLES:
   Input:  head = [3,2,0,-4], pos = 1
   Output: true
   Reason: The tail connects to the node at index 1, forming a cycle.

   Input:  head = [1,2], pos = 0
   Output: true
   Reason: The tail connects to the head node, forming a cycle.

   Input:  head = [1], pos = -1
   Output: false
   Reason: There is no cycle in the list.

 CONSTRAINTS:
   The number of the nodes in the list is in the range [0, 10^4].
   -10^5 <= Node.val <= 10^5
   pos is -1 or a valid index in the linked-list.
***/

class Node {
  val: number;
  next: Node | null;

  constructor(val: number, next: Node | null = null) {
    this.val = val;
    this.next = next;
  }
}

// pos = -1 means no cycle; otherwise the tail's next points to the node at index pos.
function buildList(arr: number[], pos: number = -1): Node | null {
  if (arr.length === 0) return null;

  const nodes: Node[] = arr.map((val) => new Node(val));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  if (pos !== -1) {
    nodes[nodes.length - 1].next = nodes[pos];
  }

  return nodes[0];
}

function solution(head: Node | null): boolean {
  if (head === null) return false;

  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}

const tests: Array<{ arr: number[]; pos: number; expected: boolean }> = [
  { arr: [3, 2, 0, -4], pos: 1, expected: true },
  { arr: [1, 2], pos: 0, expected: true },
  { arr: [1], pos: -1, expected: false },
  { arr: [], pos: -1, expected: false },
  { arr: [1], pos: 0, expected: true },
  { arr: [1, 2, 3, 4, 5], pos: -1, expected: false },
  { arr: [1, 2, 3], pos: 2, expected: true },
  { arr: [1, 2, 3, 4, 5, 6], pos: 0, expected: true },
  { arr: [1, 2, 3, 4, 5, 6, 7], pos: 3, expected: true },
];

for (const test of tests) {
  const result = solution(buildList(test.arr, test.pos));
  const pass = result === test.expected;
  console.log(
    `solution([${test.arr}], pos=${test.pos}) ->`,
    result,
    pass ? "OK" : `FAIL expected ${test.expected}`,
  );
}
