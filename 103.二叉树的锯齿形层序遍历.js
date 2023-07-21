/*
 * @Author: linqibin
 * @Date: 2022-10-18 10:56:59
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-18 11:10:23
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
    const ans = []
    order(root, ans, 0)
    return ans
};
var order = function(root, ans, k) {
    if (!root) {
        return
    }
    if (!ans[k]) {
        ans.push([])
    }
    if (k % 2 === 0) {
        ans[k].push(root.val)
    } else {
        ans[k].unshift(root.val)
    }
    order(root.left, ans, k + 1)
    order(root.right, ans, k + 1)
}
// @lc code=end

