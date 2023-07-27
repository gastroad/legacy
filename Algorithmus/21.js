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
var mergeTwoLists = function(l1, l2) {
  var array = [];
  if (!l1 && !l2) {
    return l1;
  }
  if (!l1) {
    var array2 = [];
    array2.push(l2.val);
    while (l2.next !== null) {
      l2 = l2.next;
      array2.push(l2.val);
    }
  } else if (!l2) {
    array.push(l1.val);
    while (l1.next !== null) {
      l1 = l1.next;
      array.push(l1.val);
    }
  } else {
    array.push(l1.val);
    while (l1.next !== null) {
      l1 = l1.next;
      array.push(l1.val);
    }
    var array2 = [];
    array2.push(l2.val);
    while (l2.next !== null) {
      l2 = l2.next;
      array2.push(l2.val);
    }
  }

  var mergeArray = array.concat(array2).sort(function(a, b) {
    return a - b;
  });
  var filterArray = mergeArray.filter(el => {
    if (el == undefined) {
      return false;
    } else {
      return true;
    }
  });

  return arrayToLinkedlist(filterArray);
};

function SinglyList() {
  this.head = null;
}

SinglyList.prototype.add = function(data) {
  currentNode = this.head;
  for (var i in data) {
    var newNode = new ListNode(data[i]);
    if (currentNode == null) {
      this.head = newNode;
      this._lenght++;
      currentNode = this.head;
    } else {
      currentNode.next = newNode;
      currentNode = currentNode.next;
    }
  }
  return this.head;
};

var arrayToLinkedlist = function(arr) {
  if (arr == null) {
    return [];
  }

  if (!Array.isArray(arr)) {
    throw new TypeError("array-to-linkedlist expects an array.");
  }

  var singly = new SinglyList();
  return singly.add(arr);
};
