/*
 * @Author: linqibin
 * @Date: 2022-11-15 18:02:25
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-16 08:42:34
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let sum = duration
    for (let i = 0; i < timeSeries.length - 1; i++) {
        if (timeSeries[i] + duration - 1 < timeSeries[i + 1]) {
            sum += duration
        } else {
            sum += (timeSeries[i + 1] - timeSeries[i])
        }
    }
    return sum
};
// @lc code=end

