/*
 * @Author: linqibin
 * @Date: 2022-11-25 11:16:17
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-25 11:31:45
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    const stack = []
    let res = ''
    for (const char of s) {
        if (char === ')') {
            stack.pop()
        }
        if (stack.length) {
            res += char
        }
        if (char === '(') {
            stack.push(char)
        }
    }
    return res
};

// @lc code=end

