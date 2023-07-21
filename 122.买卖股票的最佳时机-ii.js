/*
 * @Author: linqibin
 * @Date: 2022-10-20 15:01:15
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-20 15:10:14
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0, profit = 0
    for (let i = 1; i < prices.length; i++) {
        profit = prices[i] - prices[i - 1]
        if (profit > 0) {
            sum += profit
        }
    }
    return sum
};
// @lc code=end

