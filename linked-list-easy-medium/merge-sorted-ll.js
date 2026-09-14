/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const dummy = new ListNode()
    let smallest= dummy

    while( l1 && l2){

        if(l1.val<=l2.val){
            smallest.next = l1
            l1 =l1.next

        }
        else {
            smallest.next = l2
            l2 =l2.next

        }
        smallest = smallest.next
    }

    smallest.next = l1 !== null ? l1 : l2;

    return dummy.next
};