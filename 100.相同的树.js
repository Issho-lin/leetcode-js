/*
 * @Author: linqibin
 * @Date: 2022-10-18 10:35:34
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-18 10:38:21
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true
    }
    if (!p || !q) {
        return false
    }
    if (p.val !== q.val) {
        return false
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
// @lc code=end

