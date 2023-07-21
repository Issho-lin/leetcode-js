/*
 * @Author: linqibin
 * @Date: 2022-12-06 18:33:00
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-06 18:33:39
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1523 lang=javascript
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = 0
    for (let i = low; i <= high; i++) {
        if (i % 2 !== 0) {
            count++
        }
    }
    return count
};
// @lc code=end

