/*
 * @Author: linqibin
 * @Date: 2022-11-25 11:07:00
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-25 11:13:33
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
var sumRootToLeaf = function(root) {
    const stack = []
    const dfs = (root, path = '') => {
        if (!root) {
            return
        }
        path += root.val
        if (!root.left && !root.right) {
            stack.push(path)
            return
        }
        dfs(root.left, path)
        dfs(root.right, path)
    }
    dfs(root)
    return stack.map(item => parseInt(item, 2)).reduce((a, b) => a + b)
};

// @lc code=end

