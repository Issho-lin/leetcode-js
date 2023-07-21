/*
 * @Author: linqibin
 * @Date: 2022-10-19 08:51:44
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-19 09:18:19
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return getHeight(root) >= 0
};
var getHeight = function(root) {
    if (!root) {
        return 0
    }
    const l = getHeight(root.left)
    const r = getHeight(root.right)
    // 只要有一边已经不平衡（即已经走进Math.abs(l-r) > 1的逻辑）了，就一直返回-1，直到程序结束
    if (l < 0 || r < 0) {
        return -1
    }
    if (Math.abs(l - r) > 1) {
        return -1
    }
    return Math.max(l, r) + 1
}

const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 4,
                left: null,
                right: null
            },
            right: null
        },
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: {
                val: 4,
                left: null,
                right: null
            }
        }
    }
}

// @lc code=end

