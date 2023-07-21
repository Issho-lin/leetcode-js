/*
 * @Author: linqibin
 * @Date: 2022-10-18 14:45:48
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-18 15:35:23
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const map = new Map()
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }
    const dfs = (pStart, pEnd, iStart, iEnd) => {
        if (pStart > pEnd) {
            return null
        }
        // 后序遍历最后一个节点就是根节点
        const rootVal = postorder[pEnd]
        // 构建根节点
        const root = new TreeNode(rootVal)
        // 找到根节点在中序遍历中的位置，其左边就是左子树，右边就是右子树
        const mid = map.get(rootVal)
        // 左子树的数量
        const leftNum = mid - iStart
        // 递归构建左右子树
        root.left = dfs(pStart, pStart + leftNum - 1, iStart, mid - 1)
        root.right = dfs(pStart + leftNum, pEnd - 1, mid + 1, iEnd)
        return root
    }
    return dfs(0, postorder.length - 1, 0, inorder.length - 1)
};
// @lc code=end