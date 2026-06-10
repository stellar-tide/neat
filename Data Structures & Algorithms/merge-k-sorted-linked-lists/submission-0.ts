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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        if (!lists || lists.length === 0) return null;

        while (lists.length > 1) {
            const merged: ListNode[] = [];
            for (let i = 0; i < lists.length; i += 2) {
                const l1 = lists[i];
                const l2 = i + 1 < lists.length ? lists[i + 1] : null;
                merged.push(this.mergeLists(l1, l2));
            }
            lists = merged;
        }

        return lists[0];
    }

    mergeLists(l1: ListNode | null, l2: ListNode | null): ListNode {
        const dummy = new ListNode(-Infinity);
        let current = dummy;

        while (l1 && l2) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next
        }

        if (l1) current.next = l1;
        if (l2) current.next = l2;

        return dummy.next;
    }
}

/**
 * Ideas
 * -----
 * (1)  Divide and conquer (iterative), merge lists
 */