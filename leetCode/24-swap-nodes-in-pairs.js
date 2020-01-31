const {ListNode, arrayToListNode, printListNode} = require('../lib');



// 1 -> 2 -> 3 -> 4
const node = arrayToListNode([1,2,3,4]);


const swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  
  let tmp = new ListNode();
  tmp.next = head;
  
  let current = tmp;
  
  while (current.next && current.next.next) {
    let next1 = current.next;
    let next2 = current.next.next;
    let next3 = current.next.next.next;
    current.next = next2;
    next2.next = next1;
    next1.next = next3;
    current = next1;
  }
  
  return tmp.next;
};

const newNode = swapPairs(node);

printListNode(newNode);