/*
 * @Author: linqibin
 * @Date: 2022-11-24 11:52:17
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 11:57:13
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let x_parent = null, x_depth = 0
    let y_parent = null, y_depth = 0
    const dfs = (node, parent, depth) => {
        if (!node) {
            return
        }
        if (node.val === x) {
            [x_parent, x_depth] = [parent, depth]
        }
        if (node.val === y) {
            [y_parent, y_depth] = [parent, depth]
        }
        dfs(node.left, node, depth + 1)
        dfs(node.right, node, depth + 1)
    }
    dfs(root, null, 0)
    return x_parent !== y_parent && x_depth === y_depth
};
// @lc code=end

