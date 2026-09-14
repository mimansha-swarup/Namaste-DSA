/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let ans = new ListNode()
    const ansHead = ans
    let carry = 0
    while(l1|| l2 || carry){
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        carry = Math.floor(sum /10)
       const digit = sum%10
      
        ans.next = new ListNode(digit)
        ans = ans.next
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    return ansHead.next
};