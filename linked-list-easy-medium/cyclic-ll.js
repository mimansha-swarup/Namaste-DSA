/* 


 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    const set = new Set()
    let current = head
    while(current){
        if(current === null) return false
        if(set.has(current) ) return true
        set.add(current)
        current = current.next
    }
    return false
};