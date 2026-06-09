/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        const dummy = new ListNode(-Infinity);
        let p1 = list1;
        let p2 = list2;
        let current = dummy;

        while (p1 || p2) {
            if (!p1) {
                current.next = p2;
                current = current.next;
                p2 = p2.next;
            } else if (!p2) {
                current.next = p1;
                current = current.next;
                p1 = p1.next;
            } else if (p1.val <= p2.val) {
                current.next = p1;
                current = current.next;
                p1 = p1.next;
            } else {
                current.next = p2;
                current = current.next;
                p2 = p2.next;
            }
        }

        return dummy.next;
    }
}

/**
 * Given: sorted linked lists of integers list1 and list2
 * Find: merged sorted linked list in place
 * Assume: 0 <= length <= 100
 * Goal: O(m+n) time, O(1) space
 * 
 * Examples
 * --------
 * (1)  in: l1 = [1 2 4]    l2 = [1 3 5]    out: [1 1 2 3 4 5]
 *                      p1
 *                                      p2
 *                                          current = [-inf 1 1 2 3 4 5]
 * Ideas
 * -----
 * (1) Two pointers, dummy node to start (current), while p1 || p2:
 *          if (!p1) current.next = p2, p2 = p2.next
 *          else if (!p2) current.next = p1, p1 = p1.next
 *          else if (p1.val <= p2.val) current.next = p1, p1 = p1.next
 *          else current.next = p2, p2 = p2.next
 *     return dummy.next
 */
