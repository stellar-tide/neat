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
    isValidBST(root: TreeNode | null): boolean {
        const isBst = (node: TreeNode | null, pathMin: number, pathMax: number): boolean => {
            if (!node) return true;
            let valid = pathMin < node.val && node.val < pathMax;
            if (valid) valid = isBst(node.left, pathMin, node.val) && isBst(node.right, node.val, pathMax);
            return valid;
        }
        return isBst(root, -Infinity, Infinity);
    }
}
/**
 * Given: non-null root of a binary tree, may contain duplicates
 * Find: true if BST, else false -> left subtree always less than node, right subtree always greater than node, subtree are bsts
 * Assume: non-null root, dups allowed
 * Goal: O(n) time and space
 * 
 * Ideas
 * -----
 * (1)  dfs, any order
 *          - pass down: pathMin, pathMax
 *              - init: min is inf, max is -inf
 *              - visit(node.left, pathMin, node.val)
 *              - visit(node.right, node.val, pathMax)
 *          - pass up: isBst && isLeftBst && isRightBst
 *          - compute: isBst = !node || pathMin < node.val && node.val < pathMax
 *          - globals: none
 */
