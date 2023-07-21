/*
 * @Author: linqibin
 * @Date: 2022-10-18 11:10:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-15 11:47:36
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    // const queue = [root]
    // let res = 0
    // while (queue.length) {
    //     let size = queue.length
    //     while (size--) {
    //         const node = queue.shift()
    //         if (node.left) {
    //             queue.push(node.left)
    //         }
    //         if (node.right) {
    //             queue.push(node.right)
    //         }
    //     }
    //     res++
    // }
    // return res
    return Math.max(...([root.left, root.right].map(child => maxDepth(child)))) + 1
};
// @lc code=end

