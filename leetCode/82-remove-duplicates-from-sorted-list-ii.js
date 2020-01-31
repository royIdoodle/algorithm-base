const {ListNode, arrayToListNode, printListNode} = require('../lib');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const numberMap = {};
  const nodeValueList = [];
  const prev = new ListNode();
  let cur = prev;
  
  while (head) {
    if (numberMap.hasOwnProperty(head.val)) {
      numberMap[head.val]++;
    } else {
      numberMap[head.val] = 1;
    }
    head = head.next;
  }
  Object.entries(numberMap).forEach(([nodeVal, count]) => {
    if (count === 1) {
      nodeValueList.push(nodeVal);
    }
  })
  console.log(nodeValueList)
  nodeValueList.forEach((val, index) => {
    cur.val = val;
    cur.next = nodeValueList[index+1] || null;
  })
  
  return prev;
};

const node = arrayToListNode([1,2,3,3,4,4,5])
const root = deleteDuplicates(node);
printListNode(root);