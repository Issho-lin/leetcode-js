/*
 * @Author: linqibin
 * @Date: 2022-12-26 17:56:33
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-26 17:59:35
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2395 lang=javascript
 *
 * [2395] 和相等的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    const set = new Set()
    for (let i = 0; i < nums.length - 1; i++) {
        const sum = nums[i] + nums[i + 1]
        if (set.has(sum)) {
            return true
        }
        set.add(sum)
    }
    return false
};
// @lc code=end

