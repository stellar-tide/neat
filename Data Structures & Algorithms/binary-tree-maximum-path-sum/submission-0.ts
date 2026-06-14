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
     * @return {number}
     */
    maxPathSum(root: TreeNode | null): number {
        let maxSum = root.val;

        const visit = (node: TreeNode | null): number => {
            if (!node) return 0;

            const maxLeft = Math.max(visit(node.left), 0);
            const maxRight = Math.max(visit(node.right), 0);

            maxSum = Math.max(maxSum, node.val + maxLeft + maxRight);
            return node.val + Math.max(maxLeft, maxRight);
        }
        visit(root);
        return maxSum;
    }
}
/**
 * Given: root of a binary tree
 * Find: maximum path sum
 * Assume: non-null root, negative values
 * Goal: O(n) time and space
 * 
 * Ideas
 * -----
 * (a)  dfs, post-order
 *          pass down:  none
 *          pass up:    max downward path from node
 *          compute:    max path through node
 *          globals:    max path sum
 */