/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    const ans = []
    order(root, ans, 0)
    return ans.reverse()
};
var order = function(root, ans, k) {
    if (!root) {
        return
    }
    if (!ans[k]) {
        ans.push([])
    }
    ans[k].push(root.val)
    order(root.left, ans, k + 1)
    order(root.right, ans, k + 1)
}
// @lc code=end

