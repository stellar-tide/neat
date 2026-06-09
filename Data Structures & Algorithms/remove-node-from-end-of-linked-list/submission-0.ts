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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        const dummy = new ListNode(-Infinity, head);
        let slow = dummy;
        let fast = dummy;

        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        while (fast.next) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;
        return dummy.next;
    }
}

/**
 * Given: head of linked list, int n 
 * Find: remove nth node of the list
 * Assume: 1 <= length, n <= 30, no cycles
 * Goal: O(n)
 * 
 * Examples
 * --------
 * (1)  in: [ # 1 2 3 4 ] n = 2       out: [ 1 2 4 ]
 *            s   s
 *            f   f   f
 * (2)  in: [ # 1 ]   n = 1               out: [ ]
 *            s
 *            f f
 * (3)  in: [ # 1 2 ]   n = 2           out: [ 2 ]
 *            s
 *            f   f
 * 
 * (4)  in: [ # 1 2 ]   n = 1           out: [ 1 ]
 *            s s
 *            f f f
 * 
 * Ideas
 * -----
 * (1) fast and slow pointers, dummy node, move fast up n times, 
 *      while fast.next isn't null advance both pointers, slow is at n-1 from end,
 *      (check edge cases) slow.next = slow.next.next, return dummy.next
 * 
 * Edge cases
 * ----------
 * (1) size 1 list [checked]
 * (2) n = 1 [checked]
 * (3) n = size [checked]
 */