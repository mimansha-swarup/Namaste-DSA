/* 
Problem Statement:
Find the middle node of a singly linked list using the slow and fast pointer approach.

Examples:
Input: [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node is node 3.
Input: [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: There are two middle nodes: 3 and 4. We return the second one.

*/


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
var middleNode = function(head) {
    let fast = head
    let slow = head
    while(fast && fast.next){
        slow  = slow?.next
        fast  = fast?.next?.next
    }

    return slow
    
};