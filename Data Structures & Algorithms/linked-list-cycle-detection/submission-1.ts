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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        const dummy = new ListNode(0, head);
        let slow = dummy;
        let fast = dummy.next;

        while (fast && fast.next) {
            if (slow === fast) {
                return true;
            } else {
                slow = slow.next;
                fast = fast.next.next;
            }
        }

        return false;
    }
}

/**
 * Given: the beginning of a linked list head
 * Find: true if a cycle exists, otherwise false
 * Assume: 0 <= length <= 1000
 * Goal: O(n) time, O(1) space
 * 
 * Examples
 * --------
 * (1) in:  head = [1 2 3 4]    index = 1       out: true
 *                  s
 *                    f
 * 
 * Ideas
 * -----
 * (1) fast & slow pointers
 * 
 * Alg
 * ---
 * 
 * slow = head
 * fast = head.next
 * 
 * while fast and fast.next:
 *      if slow === fast:
 *          return true
 *      else:
 *          slow = slow.next
 *          fast = fast.next.next
 * return false
 * 
 */
