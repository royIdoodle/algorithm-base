const {ListNode, arrayToListNode, printListNode} = require('../lib');



// 1 -> 2 -> 3 -> 4
const node = arrayToListNode([1,2,3,4]);


const swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  
  let root = head.next;
  head.next = swapPairs(head.next.next);
  root.next = head;
  return root;
};

const newNode = swapPairs(node);

printListNode(newNode);