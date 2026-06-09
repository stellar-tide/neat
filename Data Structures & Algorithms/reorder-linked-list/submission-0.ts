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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (!head || !head.next) return;

        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let prev = null;
        let current = slow.next;
        slow.next = null;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }


        let p1 = head;
        let p2 = prev || current;
        while (p1 && p2) {
            const p1Next = p1.next;
            const p2Next = p2.next;
            p1.next = p2;
            p2.next = p1Next;
            p1 = p1Next;
            p2 = p2Next;
        }
    }
}

/**
 * Given: head of a singly linked list of length n
 * Find: A re-ordered list: [0, n-1, 1, n-2, 2, n-3, ...]
 * Assume: 1 <= n <= 1000
 * Goal: O(n) time, O(1) space
 * 
 * Examples
 * --------
 * (1)  in: [2 4 6 8]       out: [2 8 4 6] 
 *             s
 *                 f 
 * 
 * 
 * Ideas
 * -----
 * (1) fast and slow pointer (to find mid point), reverse second half of list,
 *      zipper merge both lists
 * 
 * Alg
 * ---
 * if(!head || !head.next) return head
 * 
 * slow = head
 * fast = head.next
 * 
 * while (fast and fast.next):
 *      if (slow === fast): break
 *      fast = fast.next.next
 *      slow = slow.next
 * 
 * prev = null
 * current = fast ? slow.next : slow;
 * while (current) {
 *      next = current.next
 *      current.next = prev
 *      prev = current
 *      current = next
 * }
 * 
 * dummy = new Node(-Infinity)
 * merged = dummy
 * p1 = head
 * p2 = prev || current
 * while (p1 || p2) {
 *      if (!p1) ... merged -> p2
 *      else if (!p2) ... merged -> p1
 *      else ... save both nexts, merged -> p1 -> p2, merged = p2, p1 = p1next, p2 = p2next
 * }
 * 
 * return dummy.next
 */