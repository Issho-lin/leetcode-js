/*
 * @Author: linqibin
 * @Date: 2022-11-17 15:38:45
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-17 15:47:00
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let sum = 0, map = new Map()
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    let repeat = 0
    for (const [key, value] of map.entries()) {
        if (value === 2) {
            repeat = key
        }
    }
    return [repeat, (1 + nums.length) * nums.length / 2 - sum + repeat]
};
// @lc code=end

