/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    // return preorder(root, root.val)
    const val = root.val, queue = [root]
    while (queue.length) {
        const node = queue.shift()
        if (node.val !== val) {
            return false
        }
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return true
};
// var preorder = function(root, val) {
//     if (!root) {
//         return true
//     }
//     if (root.val !== val) {
//         return false
//     }
//     return preorder(root.left, val) && preorder(root.right, val)
// }
// @lc code=end

