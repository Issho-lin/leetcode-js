/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
 * @return {number}
 */
var minDiffInBST = function(root) {
    const stack = []
    inorder(root, stack)
    let min = Infinity
    for (let i = 1; i < stack.length; i++) {
        min = Math.min(min, stack[i] - stack[i - 1])
    }
    return min
};
var inorder = function(root, stack) {
    if (!root) {
        return
    }
    inorder(root.left, stack)
    stack.push(root.val)
    inorder(root.right, stack)
}
// @lc code=end

