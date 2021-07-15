/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let x_parent = null, x_depth = -1
    let y_parent = null, y_depth = -1
    const dfs = (node, depth, parent) => {
        if (!node) {
            return
        }
        if (node.val === x) {
            [x_parent, x_depth] = [parent, depth]
        } else if (node.val === y) {
            [y_parent, y_depth] = [parent, depth]
        }
        dfs(node.left, depth + 1, node)
        dfs(node.right, depth + 1, node)
    }
    dfs(root, 0, null)
    return x_parent !== y_parent && x_depth === y_depth
};
// @lc code=end

