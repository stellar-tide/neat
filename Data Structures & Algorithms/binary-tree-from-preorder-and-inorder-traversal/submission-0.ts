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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        let pre_idx = 0;
        let indices = new Map();

        inorder.forEach((val, i) => indices.set(val, i));

        function dfs(l, r) {
            if (l > r) return null;
            let root_val = preorder[pre_idx++];
            let root = new TreeNode(root_val);
            let mid = indices.get(root_val);
            root.left = dfs(l, mid - 1);
            root.right = dfs(mid + 1, r);
            return root;
        }

        return dfs(0, inorder.length - 1);
    }
}
/**
 * Given: int arrays preorder and inorder of node vals
 * Find: reconstructed binary trees root node
 * Assume: non-empty arrays, unique values, same size arrays
 * Goal: O(n) time and space
 * 
 * Examples
 * --------
 * (a)  in: preorder = [1,2,3,4], inorder = [2,1,3,4]       out: [1,2,3,null,null,null,4]
 * 
 *                                          1
 *                              2                       3
 *                                                              4
 * 
 * (b)  in: preorder = [1 2 4 5 8 3 6 9 7]   inorder = [4 2 5 8 1 6 9 3 7]            out: []
 * 
 *                                          1
 *                              2                       3
 *                  4                   5       6               7
 *                                         8        9
 * 
 * 
 * (c)  in: pre = [1 2 3]       inorder = [1 2 3]       out: [1 null 2 null 3]
 * 
 *                                          1       
 *                                              2
 *                                                  3
 * 
 * (d)  in: pre = [1 2 3]       inorder = [3 2 1]       out: [1 2 null 3]
 *                  
 *                                          1
 *                                      2
 *                                  3
 * 
 * Ideas
 * -----
 * (a)  preorder[0] is the root, 
 *          inorder: (left subtree) of node[i], node[i], (right subtree) of node[i]
 *          preorder:  node[i], (left subtree), (right subtree)
 * 
 * 
 *      p: 0, i: 0
 * 
 *      parent: null
 * 
 *      start with pre:
 *          pre[p] is root
 *          if pre[p] === in[i] then no left child
 *          
 * 
 * 
 * 
 */