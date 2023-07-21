/*
 * @Author: linqibin
 * @Date: 2022-12-20 17:43:46
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-20 17:44:40
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2455 lang=javascript
 *
 * [2455] 可被三整除的偶数的平均值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0, cnt = 0
    for (const num of nums) {
        if (num % 6 === 0) {
            sum += num
            cnt++
        }
    }
    return sum / cnt >> 0
};
// @lc code=end

