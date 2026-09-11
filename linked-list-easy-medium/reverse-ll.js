/* 

Problem Statement:
Given the head of a singly linked list, reverse the list, and return the reversed list.

Examples:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Input: head = [1,2]
Output: [2,1]
Input: head = []
Output: []
Constraints:
The number of nodes in the list is in the range [0, 5000].
-5000 ≤ Node.val ≤ 5000

 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head
    let prev = null
    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr 
        curr = temp
    }

    head = prev
    return head
    
};
