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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        const right = [];
        let nodes = root ? [root] : [];

        while (nodes.length) {
            right.push(nodes.at(-1).val);
            const next = [];
            for (const node of nodes) {
                if (node.left) next.push(node.left);
                if (node.right) next.push(node.right);
            }
            nodes = next;
        }

        return right;
    }
}
/**
 * Given: root of a binary tree
 * Find: array of values of nodes viewed from the right side of the three
 * Assume: null root is possible (empty array), otherwise no nulls in output
 * Goal: O(n) time and space
 * 
 * Ideas
 * -----
 *  - bfs
 *      - push last node of level onto result
 * 
 * Alg
 * ---
 * result = []
 * nodes = root ? [root] : []
 * 
 * while nodes.length
 *      result.push(nodes.at(-1))
 *      next = []
 *      for node of nodes
 *          if (node.left) next.push(node.left)
 *          if (node.right) next.push(node.right)
 *      nodes = next
 * 
 * return result
 */