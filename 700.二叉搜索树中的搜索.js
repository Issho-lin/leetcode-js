/*
 * @Author: linqibin
 * @Date: 2022-11-18 10:03:36
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 10:05:58
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (!root) {
        return root
    }
    if (root.val === val) {
        return root
    }
    if (root.val < val) {
        return searchBST(root.right, val)
    }
    if (root.val > val) {
        return searchBST(root.left, val)
    }
};
// @lc code=end

