/*
 * @Author: linqibin
 * @Date: 2022-10-31 09:25:26
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-31 09:54:17
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.trim()
    const stack = []
    let num = 0, preSign = '+'
    for (let i = 0; i < s.length; i++) {
        if (/[0-9]/.test(s[i])) {
            num = num * 10 + (+s[i])
        }
        if (/[\+\-\*\/]/.test(s[i]) || i === s.length - 1) {
            switch (preSign) {
                case '+':
                    stack.push(num)
                    break
                case '-':
                    stack.push(-num)
                    break
                case '*':
                    stack[stack.length - 1] *= num
                    break
                case '/':
                    stack[stack.length - 1] = stack[stack.length - 1] / num >> 0
                    break
                default:
                    break
            }
            preSign = s[i]
            num = 0
        }
    }
    return stack.reduce((a, b) => a + b)
};
// @lc code=end

