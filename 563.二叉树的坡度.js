/*
 * @Author: linqibin
 * @Date: 2022-11-16 10:25:10
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-16 11:17:28
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function(root) {
    if (!root) {
        return 0
    }
    if (!root.left && !root.right) {
        return 0
    }
    const val = Math.abs(getSum(root.left) - getSum(root.right))
    return val + findTilt(root.left) + findTilt(root.right)
};
var getSum = function(root) {
    if (!root) {
        return 0
    }
    if (!root.left && !root.right) {
        return root.val
    }
    return root.val + getSum(root.left) + getSum(root.right)
}
// @lc code=end

