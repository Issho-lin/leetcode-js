/*
 * @Author: linqibin
 * @Date: 2022-11-23 10:45:45
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-23 10:53:59
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序搜索树
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const newRoot = new TreeNode(-1), stack = []
    let p = newRoot
    inorder(root, stack)
    for (const node of stack) {
        p.right = new TreeNode(node)
        p = p.right
    }
    return newRoot.right
};
var inorder = function(root, stack) {
    if (!root) {
        return
    }
    inorder(root.left, stack)
    stack.push(root.val)
    inorder(root.right, stack)
}
// @lc code=end

