/*
 * @Author: linqibin
 * @Date: 2022-10-19 08:33:32
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-19 08:42:17
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const dfs = (start, end) => {
        if (start > end) {
            return null
        }
        const mid = (start + end) / 2 >> 0
        const rootVal = nums[mid]
        const root = new TreeNode(rootVal)
        root.left = dfs(start, mid - 1)
        root.right = dfs(mid + 1, end)
        return root
    }
    return dfs(0, nums.length - 1)
};
// @lc code=end

