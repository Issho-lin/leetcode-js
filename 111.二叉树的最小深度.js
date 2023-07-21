/*
 * @Author: linqibin
 * @Date: 2022-10-19 09:19:58
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-19 09:24:41
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
    if (!root) {
        return 0
    }
    if (!root.left && root.right) {
        return minDepth(root.right) + 1
    }
    if (root.left && !root.right) {
        return minDepth(root.left) + 1
    }
    return Math.min(minDepth(root.left) + 1, minDepth(root.right) + 1)
};
// @lc code=end

