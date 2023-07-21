/*
 * @Author: linqibin
 * @Date: 2022-12-05 16:12:21
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 16:16:46
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换水问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let sum = numBottles
    while (numBottles >= numExchange) {
        const cnt = numBottles / numExchange >> 0
        sum += cnt
        numBottles = (numBottles % numExchange) + cnt
    }
    return sum
};

// numWaterBottles(9, 3)
// @lc code=end

