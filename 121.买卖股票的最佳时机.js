/*
 * @Author: linqibin
 * @Date: 2022-10-20 14:18:00
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-20 14:20:55
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0], res = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
            continue
        }
        res = Math.max(res, prices[i] - min)
    }
    return res
};
// @lc code=end

