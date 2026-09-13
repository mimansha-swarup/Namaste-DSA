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
    let len = 0
    let curr = sentinel
    while(curr){
        len++;
        curr = curr.next
    }
    
    let cur = sentinel

    let i =0;
    while(i< len -n -1){
        i++
        cur = cur.next

    }

    cur.next = cur?.next?.next

    return  sentinel.next

};