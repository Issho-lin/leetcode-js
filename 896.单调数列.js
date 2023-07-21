/*
 * @Author: linqibin
 * @Date: 2022-11-23 10:15:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-23 10:24:39
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if (nums.length === 1) {
        return true
    }
    let type = ''
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 0) {
            continue
        }
        if (!type) {
            type = nums[i] - nums[i - 1] > 0 ? 'asc' : 'desc'
            continue
        }
        if (type === 'asc' && nums[i] - nums[i - 1] < 0) {
            return false
        }
        if (type === 'desc' && nums[i] - nums[i - 1] > 0) {
            return false
        }
    }
    return true
};
// @lc code=end

