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
    reverseKGroup(head: ListNode | null, k: number): ListNode | null {
        const dummy = new ListNode(-Infinity, head);
        let groupPrev = dummy;
        let slow: ListNode | null = head;
        let fast: ListNode | null = head;

        for (let i = 0; i < k - 1; i++) {
            fast = fast!.next;
            if (!fast) return head;
        }

        while (fast) {
            const next = fast.next;

            this.reverseList(slow!, fast);

            groupPrev.next = fast;
            slow!.next = next;
            groupPrev = slow!;

            slow = next;
            fast = next;
            for (let i = 0; i < k - 1; i++) {
                if (!fast) return dummy.next;
                fast = fast!.next;
            }
        }

        return dummy.next;
    }

    reverseList(head: ListNode, tail: ListNode): void {
        let prev: ListNode | null = null;
        let current: ListNode | null = head;
        while (true) {
            const next = current!.next;
            current!.next = prev;
            prev = current;
            current = next;
            if (prev === tail) break;
        }
    }
}
/**
 * Given:   head of a linked list with length n and integer k
 * Find:    head of linked list with every group of k nodes reversed, if fewer than k nodes at the end leave alone
 * Assume:  1 <= k <= n <= 100    0 <= node.val <= 100
 * Goal:    O(n) time   O(1) space
 * 
 * Examples
 * --------
 * (1)  in: head = [ 1 2 3 4 5 6 ]  k = 3           out: [ 3 2 1 6 5 4 ]
 * 
 * 
 * Ideas
 * -----
 * (1)  fast and slow pointers, dummy
 * 
 *      dummy = new node(head)
 *      
 *      groupPrev = dummy
 *      fast = dummy;
 *      slow = head
 * 
 *      for k times:
 *          fast moves forward
 *          if fast is null return head
 *      
 *      while fast:
 *          next = fast.next
 *          reverseList(slow, fast)
 *          [slow, fast] = [fast, slow];
 *          groupPrev.next = slow
 *          fast.next = next;
 *          groupPrev = fast;
 *          
 *          for k times:
 *              move fast and slow forward
 *              if fast is null return head
 *      
 * 
 *      reverse list(head, tail):
 *          prev = head
 *          current = head
 * 
 *          while current != tail:
 *              current = current.next
 *              current.next = prev
 *              prev = current
 *          
 *          return head, current
 *          
 * 
 */