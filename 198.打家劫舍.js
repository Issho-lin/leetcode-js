/*
 * @Author: linqibin
 * @Date: 2022-10-26 10:56:20
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-26 11:16:04
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = []
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            dp[i] = nums[i]
        } else if (i === 1) {
            dp[i] = Math.max(dp[i - 1], nums[i])
        } else {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
        }
    }
    return dp[dp.length - 1]
};
// @lc code=end

