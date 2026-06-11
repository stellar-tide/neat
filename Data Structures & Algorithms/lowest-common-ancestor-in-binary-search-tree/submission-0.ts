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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {
        const pParents = new Map<number, number>();
        const qParents = new Map<number, number>();

        const search = (root: TreeNode | null, target: TreeNode | null, parent: number, parents: Map<number, number>): void => {
            if (!root) return;
            parents.set(root.val, parent);

            if (root.val === target.val) {
                return;
            } else if (root.left && root.val >= target.val) {
                search(root.left, target, root.val, parents);
            } else if (root.right && root.val <= target.val) {
                search(root.right, target, root.val, parents);
            }
        }

        search(root, p, -Infinity, pParents);
        search(root, q, -Infinity, qParents);

        let current = p.val;
        while (!qParents.has(current)) {
            current = pParents.get(current);
        }
        return new TreeNode(current);
    }
}
/**
 * Given: root of a binary search tree, two nodes p and q
 * Find: lowest common ancestor of p and q
 * Assume: all node values are unique, root p and q all exist in root
 * Goal: O(h) time and space
 * 
 * Ideas
 * -----
 * (1)  keep two maps of parents, initialize with root => null
 *      binary search for p from root and q from root
 *          dfs, any order
 *          - pass down: parent
 *          - pass up: none
 *          - compute: go left (target less than value), go right, stop (found or null)
 *          - global: update parent map with node.val => parent.val
 *      walk up p's parent path looking for first element in q's parent path (while loop)
 *      return first common node
 */