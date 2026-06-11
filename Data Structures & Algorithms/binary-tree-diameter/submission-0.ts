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
    diameterOfBinaryTree(root: TreeNode | null): number {
        let max = 0;

        function visit(node: TreeNode | null): number {
            if (!node) return 0;

            const leftHeight = visit(node.left);
            const rightHeight = visit(node.right);
            const diameter = leftHeight + rightHeight;
            max = Math.max(diameter, max);

            return 1 + Math.max(leftHeight, rightHeight);
        }

        visit(root);
        return max;
    }
}
/**
 * Given: Root of a binary tree
 * Find: Diameter, length of the longest path between any two nodes
 * Assume: Root can be null (0 diameter)
 * Goal: O(n) time, O(1) space
 * 
 * Examples
 * --------
 * (1)  in: root = [1,null,2,3,4,5]     out: 3
 * 
 *                      1
 *          null                2
 *                          3       4
 *                      5
 *                  
 * 1:
 *  left:
 *      null: -> 0
 *  right:
 *      2:
 *          left:
 *              3:
 *                  left:
 *                      5:
 *                          left: 0
 *                          right: 0
 *                          return: 1
 *                  return 1 + max(0, 1) // 2
 *          right:
 *              4:
 *                  return 1
 *          return 1 + 2 // 3
 * 
 * 
 * Ideas
 * -----
 * (1)  dfs, post order
 *          pass down:  none
 *          pass up:    height
 *                          base case:  null -> return 0
 *                          recurse:    return 1 + max(visit(left), visit(right))
 *          compute:    diameter = visit(left) + visit(right)
 *          global:     max diameter
 */