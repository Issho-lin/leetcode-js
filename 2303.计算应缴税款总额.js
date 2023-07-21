/*
 * @Author: linqibin
 * @Date: 2023-02-13 16:15:03
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-13 16:49:03
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2303 lang=javascript
 *
 * [2303] 计算应缴税款总额
 */

// @lc code=start
/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let sum = 0
    for (let i = 0; i < brackets.length; i++) {
        const [upper, percent] = brackets[i]
        if (income < upper) {
            sum += (income - (i > 0 ? brackets[i - 1][0] : 0)) * percent / 100
            break
        }
        sum += (upper - (i > 0 ? brackets[i - 1][0] : 0)) * percent / 100
    }
    return sum
};

calculateTax([[1,0],[4,25],[5,50]], 2)
// @lc code=end

