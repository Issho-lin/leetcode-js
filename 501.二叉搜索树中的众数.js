/*
 * @Author: linqibin
 * @Date: 2022-11-11 15:20:29
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-11 15:28:23
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function(root) {
    const queue = [root], map = new Map
    let max = 0
    while (queue.length) {
        const node = queue.shift()
        if (node) {
            const count = map.get(node.val) || 0
            map.set(node.val, count + 1)
            max = Math.max(max, count + 1)
        }
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return [...map.keys()].filter(key => map.get(key) === max)
};
// @lc code=end

