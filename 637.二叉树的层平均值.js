/*
 * @Author: linqibin
 * @Date: 2022-11-17 14:57:22
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-17 15:21:27
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function(root) {
    const ans = [], rank = []
    preorder(root, 0, ans, rank)
    return ans.map((item, idx) => item / rank[idx])
};
var preorder = function(root, k, ans, rank) {
    if (!root) {
        return
    }
    if (!ans[k]) {
        ans[k] = 0
    }
    if (!rank[k]) {
        rank[k] = 0
    }
    rank[k] += 1
    ans[k] += root.val
    preorder(root.left, k + 1, ans, rank)
    preorder(root.right, k + 1, ans, rank)
}
// @lc code=end

