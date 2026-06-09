// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if (!head) return null;

        const oldToNew = new Map<Node, Node>();
        const newHead = new Node(head.val);
        let newCurrent = newHead;
        let oldCurrent = head;

        while (oldCurrent) {
            oldToNew.set(oldCurrent, newCurrent);
            oldCurrent = oldCurrent.next;
            const next = oldCurrent ? new Node(oldCurrent.val) : null;
            newCurrent.next = next;
            newCurrent = next;
        }

        oldCurrent = head;
        while (oldCurrent) {
            newCurrent = oldToNew.get(oldCurrent);
            newCurrent.random = oldToNew.get(oldCurrent.random);
            oldCurrent = oldCurrent.next;
        }

        return newHead;
    }
}
/**
 * Given: head of linked list with additional random pointers
 * Find: a deeply copied clone of the list, no references to original list
 * Assume: 0 <= length, node.val <= 100, nodes are not unique
 * Goal: O(n) time and O(n) space
 * 
 * Examples
 * --------
 * (1)  in: head = [ [ 3 null ] [ 7 3 ] [ 4 0 ] [ 5 1 ] ]
 * 
 *                  [ 3 null 7 ]
 * 
 * Ideas
 * -----
 * (1) map, iterate on next values (walk through the list)
 *      clone without randoms filled,
 *      map from old list node -> new list node 
 *      second pass on old list to fill in random links in new:
 *          if old node has random, then map[old node].random = map[old node.random]
 */
