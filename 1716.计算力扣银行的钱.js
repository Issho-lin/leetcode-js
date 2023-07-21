/*
 * @Author: linqibin
 * @Date: 2023-01-16 17:44:19
 * @LastEditors: linqibin
 * @LastEditTime: 2023-01-16 17:48:28
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1716 lang=javascript
 *
 * [1716] 计算力扣银行的钱
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    const circle = n / 7 >> 0
    let total = 0
    for (let i = 0; i < circle; i++) {
        total += ((1 + 7) * 7 / 2 + i * 7)
    }
    for (let i = 0; i < n % 7; i++) {
        total += (i + circle + 1)
    }
    return total
};
// @lc code=end

