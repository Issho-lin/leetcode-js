/*
 * @Author: linqibin
 * @Date: 2022-10-26 11:17:01
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-26 11:21:37
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const ans = []
    dfs(root, ans, 0)
    return ans.map(item => item[item.length - 1])
};
var dfs = function(root, ans, k) {
    if (!root) {
        return
    }
    if (!ans[k]) {
        ans[k] = []
    }
    ans[k].push(root.val)
    dfs(root.left, ans, k + 1)
    dfs(root.right, ans, k + 1)
}
// @lc code=end

