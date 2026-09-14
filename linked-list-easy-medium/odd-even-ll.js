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
var oddEvenList = function(head) {
     if (!head || !head.next) return head;
    
    let odd =head , even = head.next ;
    const evenStart = even
    
    while(odd && odd.next && even.next && even.next){
        odd.next=odd.next.next
        odd = odd.next
        even.next=even.next.next
        even = even.next

        
    }
    odd.next = evenStart
    return head


    
};