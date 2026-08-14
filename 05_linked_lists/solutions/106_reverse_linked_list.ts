/***
 Problem 106: Reverse Linked List
 https://leetcode.com/problems/reverse-linked-list/
 Difficulty: Easy

 PROBLEM STATEMENT:
 Given the head of a singly linked list, reverse the list, and return
 the reversed list's head.

 EXAMPLES:
   Input:  head = [1,2,3,4,5]
   Output: [5,4,3,2,1]
   Reason: The list is reversed end to end.

   Input:  head = [1,2]
   Output: [2,1]
   Reason: Swapping the only two nodes reverses the list.

   Input:  head = []
   Output: []
   Reason: An empty list reversed is still empty.

 CONSTRAINTS:
   The number of nodes in the list is in the range [0, 5000].
   -5000 <= Node.val <= 5000
***/


class Node {
  val: number;
  next: Node | null;

  constructor(val: number, next: Node | null = null) {
    this.val = val;
    this.next = next;
  }
}


function solution(head: Node | null): Node | null {
  let curr = head
  let prev = null
  while (curr) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }


  return  prev
}



function buildList(arr: number[]): Node | null {
  if (arr.length === 0) return null;
  let head = new Node(arr[0])
  let prev = head
  for (let i = 1; i < arr.length; i++) {
    let curr = new Node(arr[i])
    prev.next = curr
    prev = curr
  }


  return head
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

console.log(toArray(solution(buildList([1, 2, 3, 4, 5])))); // expected: [5,4,3,2,1]
console.log(toArray(solution(buildList([1, 2])))); // expected: [2,1]
console.log(toArray(solution(buildList([1])))); // expected: [1]
console.log(toArray(solution(buildList([])))); // expected: []
