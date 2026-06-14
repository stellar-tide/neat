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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let target: number;

        const visit = (node: TreeNode | null): void => {
            if (!node || target) return;
            visit(node.left);
            if (k === 1) target = node.val;
            k--;
            visit(node.right);
        }
        visit(root);

        return target;
    }
}
/**
 * Given: root of binary search tree
 * Find: kth smallest node value
 * Assume: non-null root, node values are distinct and non-negative, k <= size of tree
 * Goal: O(n) time and space
 * 
 * Ideas
 * -----
 * (a)  dfs, in-order traveral
 *          - pass down: nothing (only recurse while target is undefined)
 *          - pass up: nothing
 *          - compute:  k === 1, 
 *          - globals:  k (decremented during visit), target (set when k === 1)
 * 
 * Alg
 * ---
 * let target: number;
 * 
 * visit = (root) => {
 *  if (!root || target) return;
 *  visit(root.left);
 *  if (k === 1) target = node.value
 *  k--;
 *  visit(root.right)
 * }
 * 
 * visit(root)
 * return target
 */