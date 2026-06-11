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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        let fullyBalanced = true;

        function visit(node: TreeNode | null): number {
            if (!node) return 0;

            const leftHeight = visit(node.left);
            const rightHeight = visit(node.right);
            const balanced = Math.abs(leftHeight - rightHeight) <= 1;
            fullyBalanced = fullyBalanced && balanced;

            return 1 + Math.max(leftHeight, rightHeight);
        }

        visit(root);
        return fullyBalanced;
    }
}

/**
 * Given: Root of binary tree
 * Find: True if balanced (abs(leftHeight, rightHeight) <= 1)
 * 
 * Examples
 * --------
 * (1)  in: root = [1,2,3,null,null,4,null,5]       out: false
 * 
 *                              1
 *              2                               3
 *                                          4
 *                                      5
 * 
 * Ideas
 * -----
 * (1)  dfs, post order
 *          - pass down:    none
 *          - pass up:      height
 *          - compute:      balanced
 *          - global:       isBalanced = isBalanced & balanced (start true)
 */