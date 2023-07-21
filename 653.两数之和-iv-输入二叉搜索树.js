/*
 * @Author: linqibin
 * @Date: 2022-11-17 15:51:19
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-17 16:03:06
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入二叉搜索树
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const map = new Map()
    const queue = [root]
    while (queue.length) {
        const node = queue.shift()
        if (node) {
            if (map.has(node.val)) {
                return true
            } else {
                map.set(k - node.val, node.val)
            }
        }
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return false
};
// @lc code=end

