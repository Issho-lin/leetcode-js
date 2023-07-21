/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const ans = [], stack = []
    const search = (root, targetSum) => {
        if (!root) {
            return
        }
        // 到叶子节点
        if (!root.left && !root.right) {
            if (root.val === targetSum) {
                ans.push([...stack, root.val])
            }
            return
        }
        // 逐级递减
        targetSum -= root.val
        stack.push(root.val)
        search(root.left, targetSum)
        search(root.right, targetSum)
        stack.pop()
    }
    search(root, targetSum)
    return ans
};

// @lc code=end

