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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        const dummy = new ListNode(-Infinity);
        let current = dummy;
        let carry = 0;

        while (l1 || l2 || carry) {
            const val1 = l1?.val ?? 0;
            const val2 = l2?.val ?? 0;
            const sum = val1 + val2 + carry;
            current.next = new ListNode(sum % 10);
            carry = Math.floor(sum / 10);
            l1 = l1?.next ?? null;
            l2 = l2?.next ?? null;
            current = current.next;
        }

        return dummy.next;
    }
}

/**
 * Given: two non-empty linked lists with non-negative values representing the reverse order of the digits of a number
 * Find: the sum of the two numbers as a reversed linked list
 * Assume: 0 <= lengths <= 100, 0 <= values <= 9, no leading zeroes unless the number is zero
 * Goal: O(m + n) time, O(1) space
 * 
 * Examples
 * --------
 * (1)  in: l1 = [ 1 2 3 ]      l2 = [ 4 5 6 ]      out: [ 5 7 9 ]
 * 
 * (2)  in: l1 = [ 9 ]          l2 = [ 9 ]          out: [ 1 8 ]
 * 
 * (3)  in: l1 = [ ]            l2 = [ 9 2 ]          out: [ 9  2 ]
 * 
 * Ideas
 * -----
 * (1)  make new dummy head,
 *      let current be head,
 *      let carry be zero,
 *      iter while either pointer true or carry is true,
 *          val1 = l1?.val ?? 0
 *          val2 = l2?.val ?? 0
 *          sum = val1 + val2 + carry
 *              if sum greater >= ten
 *                  current.next gets new node with sum mod ten
 *                  carry gets one
 *              else
 *                  current.next gets new node with sum
 *                  carry gets zero
 *          l1 = l1?.next ?? null
 *          l2 = l2?.next ?? null
 *          current = current.next
 *          
 *              
 *              
 */