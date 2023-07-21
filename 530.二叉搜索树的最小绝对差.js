/*
 * @Author: linqibin
 * @Date: 2022-11-14 17:05:39
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-14 17:34:12
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
    let min = Infinity, last
    // 二叉搜索树，中序遍历，升序数组，差值最小值必然为相邻两个节点的差
    const dfs = (root) => {
        if (!root) {
            return
        }
        dfs(root.left)
        if (last) {
            min = Math.min(min, root.val - last.val)
        }
        last = root
        dfs(root.right)
    }
    dfs(root)
    return min
};
// @lc code=end

