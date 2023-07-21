/*
 * @Author: linqibin
 * @Date: 2022-10-31 14:49:36
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-31 15:14:57
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res = []
    const buildPaths = (root, path = '') => {
        if (!root) {
            return
        }
        path += root.val
        if (!root.left && !root.right) {
            res.push(path)
            return
        }
        path += '->'
        buildPaths(root.left, path)
        buildPaths(root.right, path)
    }
    buildPaths(root)
    return res
};
// @lc code=end

