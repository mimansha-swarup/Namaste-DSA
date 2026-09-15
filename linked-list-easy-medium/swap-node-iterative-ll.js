/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head) return head
    const dummy = new ListNode(0,head)
    let p =  dummy
    let c= head
    let n = head.next

    while(n){
        // swapping phase
        p.next = n
        c.next  = n.next
        n.next = c

        // moving phase
        p = c
        c= c.next
        n =c && c.next
    }

    return dummy.next
    
};