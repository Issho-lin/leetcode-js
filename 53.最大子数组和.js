/*
 * @Author: linqibin
 * @Date: 2022-10-13 14:14:01
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-14 08:38:28
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0], res = 0
    for (let i = 0; i < nums.length; i++) {
        res += nums[i]
        if (res < nums[i]) {
            res = nums[i]
        }
        if (res > max) {
            max = res
        }
    }
    return max
};
// @lc code=end

