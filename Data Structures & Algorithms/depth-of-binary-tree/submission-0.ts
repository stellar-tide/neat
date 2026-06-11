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
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;
        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    }
}
/**
 * Given: Root of a binary tree
 * Find: Depth of tree (single node has depth 1)
 * Assume: Root can be null, 0 <= # nodes <= 100
 * Goal: O(n) time, O(1) space
 * 
 * Examples
 * --------
 * (1)  in: root = [ 1 2 3 null null 4 ]    out: 3
 * 
 *                      1           
 *                  2       3        
 *                        4
 *                              
 *      visit(1):
 *          left: 
 *              visit(2):
 *                  left:   0
 *                  right:  0
 *                  return 1 + 0
 *              
 *          right:
 *              visit(3):
 *                  left:
 *                      visit(4):
 *                          return 1
 *                  return 1 + 1
 *          
 *          return 1 + max(1, 2) // 3
 * Ideas
 * -----
 * (1)  dfs, post-order
 *          pass down:  none
 *          pass up:    depth
 *              base case:  root is null -> 0
 *              recurse:    1 + max(visit(left), visit(right))
 *          global:     none
 * 
 * Alg
 * ---
 * if (!root) return 0
 * return max( visit(left), visit(right) )
 */
