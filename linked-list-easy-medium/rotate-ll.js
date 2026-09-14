/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
       if (!head) return head; 
    let len = 0
    let cur = head
    while(cur){
        len++
        cur = cur.next
    }

    k = k%len
    if(k === 0) return head
    let i =0
    let f = head
    let s = head
    while(i< k){
        f= f.next
        i++
    }

    while(f.next){
        s=s.next
        f= f.next
    }

    const newHead = s.next
    s.next = null
    f.next = head
    return newHead
    
};