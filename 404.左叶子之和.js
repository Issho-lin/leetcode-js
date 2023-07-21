/*
 * @Author: linqibin
 * @Date: 2022-11-04 11:50:46
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-04 14:12:09
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
    const queue = [root]
    let sum = 0
    while (queue.length) {
        const node = queue.shift()
        if (node.left) {
            queue.push(node.left)
            if (!node.left.left && !node.left.right) {
                sum += node.left.val
            }
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return sum
};
// @lc code=end

