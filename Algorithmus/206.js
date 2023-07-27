/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function createL(a) {
  let node, temp;
  for (let i = a.length - 1; i >= 0; i--) {
    if (!node)
      node = new ListNode(a[i]);
    else {
      temp = new ListNode(a[i]);
      temp.next = node;
      node = temp;
    }
  }
  return node;
}


var reverseList = function (head) {
  if (!head) return head
  var arrayList = []
  var re = true
  var temp = head

  while (re) {
    if (temp.next == null) {
      re = false
    }
    arrayList.push(temp.val)
    temp = temp.next
  }
  var sortedArrayList = arrayList.reverse()

  head = createL(sortedArrayList)
  return head

};


