// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
// You may not alter the values in the nodes, only nodes itself may be changed.
// Only constant memory is allowed.
// For example:
// Given this linked list: 1->2->3->4->5
// For k = 2, you should return: 2->1->4->3->5
// For k = 3, you should return: 3->2->1->4->5

const expect = {
  equal: (first, second) => {
    console.log(equal(first, second));
  }, 
  hasLength: (a, l) => {
    console.log(hasLength(a, l));
  }
}

function equal(first, second) {
  return first === second;
}

function hasLength(ar, length) {
  return ar.length === length;
}

function listToString(head) {
  let str = '';
  let node = head;
  while(node) {
    str += `->${node.val}`;
    node = node.next;
  }
  return str;
}


function getList (n) {
  let head;
  let tail;
  for (var i = 1; i <= n; i++) {
    const node = {
      val: i,
      next: null,
    };
    if (!head) {
      head = node;
      tail = node;
    }
    tail.next = node;
    tail = node;
  }

  return head;
};

function reverseKGroup (head, k) {
  if (!head || k <= 1) {
    return head;
  }

  let i = 0;
  let nextGroupHead = head;
  let tail;
  while(i < k && nextGroupHead) {
    tail = nextGroupHead;
    nextGroupHead = nextGroupHead.next;
    i++;
  }

  if (i < k) return head;

  let beforeLast = head;
  let newHead = tail;

  while(head !== tail) {
    while(beforeLast.next !== tail) {
      beforeLast = beforeLast.next;
    }
    tail.next = beforeLast;
    tail = beforeLast;
    beforeLast = head;
  }
  head.next = reverseKGroup(nextGroupHead, k);
  return newHead;
}


let firstList = getList(5);
let secondList = getList(5);
let thirdList = getList(5);

firstList = reverseKGroup(firstList, 2);
secondList = reverseKGroup(secondList, 3);
thirdList = reverseKGroup(thirdList, 1);

expect.equal(listToString(firstList), '->2->1->4->3->5');
expect.equal(listToString(secondList), '->3->2->1->4->5');
expect.equal(listToString(thirdList), '->1->2->3->4->5');