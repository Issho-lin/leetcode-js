/*
 * @Author: linqibin
 * @Date: 2022-11-17 08:58:41
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-17 11:08:10
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @return {string}
 */
var tree2str = function(root) {
    const ret = []
    dfs(root, ret)
    return ret.join('')
};
var dfs = function(root, ans) {
    if (!root) {
        return
    }
    ans.push(root.val)
    if (!root.left && !root.right) {
        return
    }
    if (root.left) {
        ans.push('(')
        dfs(root.left, ans)
        ans.push(')')
    } else {
        ans.push('()')
    }
    if (root.right) {
        ans.push('(')
        dfs(root.right, ans)
        ans.push(')')
    }
}
// @lc code=end

