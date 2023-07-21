/*
 * @Author: linqibin
 * @Date: 2022-10-19 09:26:31
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-19 09:32:43
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false
    }
    if (!root.left && !root.right) {
        return targetSum === root.val
    }
    targetSum -= root.val
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
};
// @lc code=end

