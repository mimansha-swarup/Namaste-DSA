/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const set = new Set()
    let h2 = headB
    while(h2){
        set.add(h2)
        h2 = h2.next
    }

    let h1 = headA
    while(h1){
        if(set.has(h1)) break
        h1 = h1.next
    }
    return h1
};