/*
 * @Author: linqibin
 * @Date: 2022-11-14 15:44:18
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-14 16:02:59
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num === 1) {
        return false
    }
    let sum = 0, sqrt = Math.sqrt(num) >> 0
    while (sqrt) {
        if (num % sqrt === 0) {
            sum += (sqrt + num / sqrt)
        }
        sqrt--
    }
    return sum / 2 === num
};
// @lc code=end

