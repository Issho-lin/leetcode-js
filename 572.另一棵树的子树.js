/*
 * @Author: linqibin
 * @Date: 2022-11-16 11:54:51
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-16 14:31:01
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!subRoot) {
        return true
    }
    if (!root) {
        return false
    }
    return isSame(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};
var isSame = function(root1, root2) {
    if (!root1 && !root2) {
        return true
    }
    if (!root1 || !root2) {
        return false
    }
    return root1.val === root2.val && isSame(root1.left, root2.left) && isSame(root1.right, root2.right)
}
// @lc code=end

