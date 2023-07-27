/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2, hasCarry) {
  let node = null;
  if (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;
    const val = hasCarry ? val1 + val2 + 1 : val1 + val2;
    node = new ListNode(val % 10);
    node.next = addTwoNumbers(next1, next2, val >= 10);
  } else if (hasCarry) {
    node = new ListNode(1);
    node.next = null;
  }
  return node;
};
