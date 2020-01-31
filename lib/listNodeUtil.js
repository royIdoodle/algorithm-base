const {ListNode} = require('./listNode');

/**
 * 数组转链表
 * @param list
 * @returns {ListNode}
 * @constructor
 */
function arrayToListNode (list = []) {
  let head = node = new ListNode();
  const innerList = [...list];
  while(innerList.length) {
    node.val = innerList.shift();
    if (innerList.length > 0) {
      node.next = new ListNode();
    }
    node = node.next;
  }
  return head;
}

/**
 * 链表转数组
 * @param head
 * @returns {[]}
 */
function listNodeToArray(head) {
  const nodeValList = [];
  while(head) {
    nodeValList.push(head.val);
    head = head.next;
  }
  return nodeValList;
}

function printListNode(head) {
  console.log(listNodeToArray(head).join(' -> '))
}

exports.arrayToListNode = arrayToListNode;
exports.listNodeToArray = listNodeToArray;
exports.printListNode = printListNode;