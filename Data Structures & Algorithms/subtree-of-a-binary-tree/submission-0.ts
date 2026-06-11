/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        let foundSubtree = false;

        let findSubtree = (p: TreeNode | null): void => {
            let found = isEqual(p, subRoot);
            foundSubtree = found || foundSubtree;
            if (p && !found) {
                findSubtree(p.left);
                findSubtree(p.right);
            }
        }

        let isEqual = (p: TreeNode | null, q: TreeNode | null): boolean => {
            let equal = (!p && !q) || (p?.val === q?.val);
            if (equal && p && q) {
                equal = isEqual(p.left, q.left) && isEqual(p.right, q.right);
            }
            return equal;
        }

        findSubtree(root);
        return foundSubtree;
    }
}
/**
 * Given:   root and subroot of two binary triees
 * Find:    true if subroot is a subtree of root (same structure and values inside root's descendants)
 * Assume:  1 <= sizes, vals <= 100
 * Goal:    O(m * n) time, O(m + n) space
 * 
 * Ideas
 * -----
 * (1)  dfs, any order (post), subroutine to check equal called when node vals are equal
 * 
 *      isSubtree(p)
 *          - passed down:  none
 *          - passed up:    none
 *          - compute:      isEqual(p, q)
 *          - global:       hasSubtree = hasSubtree || isEqual
 * 
 *      isEqual(p, q)
 *          - down:     none
 *          - equal:    equal = (!p and !q) || (p?.val === q?.val)
 *          - up:       left equal && right equal && self equal
 *          - global:   none
 * 
 * Examples
 * --------
 * (1)  in: root = [1,2,3,4,5]      subRoot = [2,4,5]       out: true
 * 
 *                              1                                       2
 *                      2               3                           4       5
 *                  4       5
 * 
 * 
 * 
 */
