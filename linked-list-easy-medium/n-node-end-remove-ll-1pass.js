/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode()
    sentinel.next = head
    let p1 = sentinel, p2= sentinel;
    let i = 0
    while(i<n){
        p1 = p1.next
        i++
    }
    
    while(p1.next){
        p1 = p1.next
        p2 = p2.next
    }
    p2.next = p2.next?.next
    return sentinel.next

};