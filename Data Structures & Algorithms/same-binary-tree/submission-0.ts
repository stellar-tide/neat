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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        let equivalent = true;

        function visit(P: TreeNode | null, Q: TreeNode | null): void {
            if (P && Q) {
                equivalent = equivalent && (P.val === Q.val);
                visit(P.left, Q.left);
                visit(P.right, Q.right);
            } else if (!P && !Q) {
            } else {
                equivalent = false;
            }
        }
        visit(p, q);

        return equivalent;
    }
}

/**
 * Given: roots of two binary trees p and q
 * Find: true if trees are equal, otherwise false
 *          equal: exact same structure and nodes have same values
 * Assume: roots can be null
 * Goal: O(m + n) time, O(1) space
 * 
 * Examples
 * --------
 * (1)  in: p = [1,2,3], q = [1,2,3]        out: true
 * 
 * 
 * 
 * (2)  in: p = [1,2,3], q = [1,3,2]        out: false
 * 
 * Ideas
 * -----
 * (1)  dfs, post order
 *          - pass down:    none
 *          - pass up:      none
 *          - compute:      p and q equal
 *                              if p && q compare values
 *                              else false
 *          - global:       allEqual = equal && allEqual
 * 
 */