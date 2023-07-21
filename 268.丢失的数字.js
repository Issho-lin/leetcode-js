/*
 * @Author: linqibin
 * @Date: 2022-11-01 10:09:25
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-01 10:14:08
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length
    // 0-n总和应为：(首项 + 末项) * 项数 / 2
    const sum = (0 + n) * (n + 1) / 2
    // 实际总和为
    const ret = nums.reduce((a, b) => a + b)
    return sum - ret
};
// @lc code=end

