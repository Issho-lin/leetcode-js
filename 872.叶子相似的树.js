/*
 * @Author: linqibin
 * @Date: 2022-11-22 17:45:54
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 17:52:44
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const stack1 = [], stack2 = []
    inorderLeaf(root1, stack1)
    inorderLeaf(root2, stack2)
    return stack1.join(',') === stack2.join(',')
};
var inorderLeaf = function(root, stack) {
    if (!root) {
        return
    }
    inorderLeaf(root.left, stack)
    if (!root.left && !root.right) {
        stack.push(root.val)
    }
    inorderLeaf(root.right, stack)
}
// @lc code=end

