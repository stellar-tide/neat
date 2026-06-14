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

class Codec {
    separator = '|';
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        const nodes = [];

        const visit = (node: TreeNode | null) => {
            nodes.push(node?.val ?? '#');
            if (node) {
                visit(node.left);
                visit(node.right);
            }
        }
        visit(root);

        return nodes.join(this.separator);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode | null {
        const values = data.split(this.separator);
        let i = 0;

        const visit = (): TreeNode | null => {
            const value = values[i];
            i++;
            if (value === '#') return null;
            const node = new TreeNode(parseInt(value));
            node.left = visit();
            node.right = visit();
            return node;
        }

        return visit();
    }
}
/**
 * Serialize:
 * ==========
 * Given: root of a binary tree
 * Find: serialization of tree
 * Assume: root may be null, pos and negative values, size less than 1000
 * Goal: O(n) time and space
 * 
 * 
 * Ideas
 * -----
 * (a)  dfs, pre-order, nulls for nulls
 * 
 * 
 * 
 * Deserialize:
 * ============
 * Given: serialization of a binary tree
 * Find: reconstructed root of binary tree (or null)
 * Assume: serialized tree may be empty
 * Goal: O(n) time and space
 */