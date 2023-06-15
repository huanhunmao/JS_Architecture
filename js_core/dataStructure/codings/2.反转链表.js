// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

class ListNode{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}
const reverseList = function(head) {
  let prev = null 
  let current = head

  while (current != null){
    const next  = current.next 
    current.next  = prev 
    prev = current 
    current  = next 
  }

  return prev 
};

// 创建链表
let head = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// 反转链表
let reversedHead = reverseList(head);

// 打印反转后的链表
let current = reversedHead;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}






