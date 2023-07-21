/*
 * @Author: linqibin
 * @Date: 2022-12-20 16:38:30
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-20 16:39:03
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2469 lang=javascript
 *
 * [2469] 温度转换
 */

// @lc code=start
/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    return [celsius + 273.15, celsius * 1.8 + 32]
};
// @lc code=end

