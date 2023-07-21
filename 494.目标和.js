/*
 * @Author: linqibin
 * @Date: 2022-11-11 14:39:56
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-11 14:48:59
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let count = 0
    const dfs = (idx, sum) => {
        if (idx === nums.length) {
            if (target === sum) {
                count++
            }
            return
        }
        dfs(idx + 1, sum + nums[idx])
        dfs(idx + 1, sum - nums[idx])
    }
    dfs(0, 0)
    return count
};
// @lc code=end

