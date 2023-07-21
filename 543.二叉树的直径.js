/*
 * @Author: linqibin
 * @Date: 2022-11-16 09:30:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-16 09:55:21
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
    let max = 0
    while (root) {
        const left = maxHeight(root.left), right = maxHeight(root.right)
        max = Math.max(max, left + right)
        if (left === right) {
            break
        }
        if (left > right) {
            root = root.left
        } else {
            root = root.right
        }
    }
    return max
};
var maxHeight = function(root) {
    if (!root) {
        return 0
    }
    return Math.max(maxHeight(root.left), maxHeight(root.right)) + 1
}
// @lc code=end

