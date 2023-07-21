/*
 * @Author: linqibin
 * @Date: 2022-12-06 17:27:55
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-06 17:32:21
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const findRightMin = (start) => {
        for (let i = start + 1; i < prices.length; i++) {
            if (prices[i] <= prices[start]) {
                return prices[i]
            }
        }
        return 0
    }
    for (let i = 0; i < prices.length; i++) {
        prices[i] -= findRightMin(i)
    }
    return prices
};
// @lc code=end

