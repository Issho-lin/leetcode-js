/*
 * @Author: linqibin
 * @Date: 2023-01-17 11:07:56
 * @LastEditors: linqibin
 * @LastEditTime: 2023-01-17 11:11:15
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1742 lang=javascript
 *
 * [1742] 盒子中小球的最大数量
 */

// @lc code=start
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    const map = new Map()
    for (let i = lowLimit; i <= highLimit; i++) {
        const sum = getBitSum(i)
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    let max = -Infinity
    for (const value of map.values()) {
        max = Math.max(max, value)
    }
    return max
};
var getBitSum = function(num) {
    let sum = 0
    while (num) {
        sum += num % 10
        num = num / 10 >> 0
    }
    return sum
}
// @lc code=end

