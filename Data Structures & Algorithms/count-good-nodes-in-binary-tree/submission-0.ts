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
    goodNodes(root: TreeNode | null): number {
        let goodCount = 0;
        
        const visit = (node: TreeNode | null, pathMax: number): void => {
            if (!node) return;
            if (node.val >= pathMax) goodCount++;
            pathMax = Math.max(pathMax, node.val);
            visit(node.left, pathMax);
            visit(node.right, pathMax);
        }
        visit(root, -Infinity);

        return goodCount;
    }
}
/**
 * Given: root of a binary tree (not null)
 * Find: the count of nodes considered "good": path from root to node contains no nodes with value greater than node.val
 * Assume: non null root
 * Goal: O(n) time and space
 * 
 * Ideas
 * -----
 * (1)  compute parents - O(n) time and space, dfs, for each node walk tree - O(nh) time O(n) space
 * (2)  dfs, pass down path, compute if path good - O(nh) time, O(nh) space
 * (3)  dfs, pass down path max, compute if good - O(n) time, O(n) space
 *          is good: root is good, path max is all we have to pass down - if node.val >= path max
 *          pass down: path max (init to -infinity), max of path max and node.val
 *          pass up: none
 *          compute: is good
 *          globals: good count
 * 
 * 
 */