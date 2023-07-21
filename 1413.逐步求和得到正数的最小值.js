/*
 * @Author: linqibin
 * @Date: 2022-12-05 14:23:27
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 14:27:12
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1413 lang=javascript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    // 求前缀和，再从前缀和数组中找出最小值，令startVal与其相加刚好等于1
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1]
    }
    let min = Infinity
    for (const num of nums) {
        min = Math.min(min, num)
    }
    return min >= 1 ? 1 : 1 - min
};
// @lc code=end

