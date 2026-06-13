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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const levels = [];
        let nodes = [];
        if (root) nodes.push(root);

        while (nodes.length) {
            let values = [];
            let next = [];
            for (const node of nodes) {
                if (node) {
                    values.push(node.val);
                    next = [...next, node.left, node.right];
                }
            }
            if (values.length) levels.push(values);
            nodes = next;
        }
        return levels;
    }
}
/**
 * Given:   Root of a binary tree
 * Find:    Level order traversal of the tree as a nested list
 * Assume:  0 <= size (n) <= 1000
 * Goal:    O(n) time, O(n) space
 * 
 * Examples
 * --------
 * (1)  in: [ 1 2 3 4 5 6 7 ]       out: [ [ 1 ] [ 2 3 ] [ 4 5 6 7 ] ]
 * 
 * 
 * Ideas
 * -----
 * (1)  bfs, array for each level
 * 
 * Alg
 * ---
 * levels = []
 * nodes = []
 * if head: nodes.push head
 * 
 * while nodes.length
 *      levels.push([...nodes])
 *      level = []
 *      for node of nodes
 *          if node level = [...level, node.left, node.right]
 *      if !level.every(x => x === null) nodes = level
 *      
 *      
 */