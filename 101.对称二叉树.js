/*
 * @Author: linqibin
 * @Date: 2022-10-18 10:39:47
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-18 10:43:37
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
    return !root || isSame(root.left, root.right)
};
var isSame = function(p, q) {
    if (!p && !q) {
        return true
    }
    if (!p || !q) {
        return false
    }
    if (p.val !== q.val) {
        return false
    }
    return isSame(p.left, q.right) && isSame(p.right, q.left)
}
// @lc code=end

