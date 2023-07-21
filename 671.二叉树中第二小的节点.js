/*
 * @Author: linqibin
 * @Date: 2022-11-18 08:35:04
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 08:42:42
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function(root) {
    let min1 = Infinity, min2 = Infinity
    const queue = [root]
    while (queue.length) {
        const node = queue.shift()
        if (node) {
            if (node.val < min1) {
                min2 = min1
                min1 = node.val
            } else if (node.val < min2 && node.val !== min1) {
                min2 = node.val
            }
        }
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return min2 === Infinity ? -1 : min2
};
// @lc code=end

