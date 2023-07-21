/*
 * @Author: linqibin
 * @Date: 2022-11-24 09:02:36
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 09:10:40
 * @Description:
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if (!root) {
        return 0
    }
    const queue = [root]
    let sum = 0
    while (queue.length) {
        const node = queue.shift()
        if (node.val < low) {
            if (node.right) {
                queue.push(node.right)
            }
        } else if (node.val > high) {
            if (node.left) {
                queue.push(node.left)
            }
        } else {
            sum += node.val
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return sum
};
// @lc code=end

