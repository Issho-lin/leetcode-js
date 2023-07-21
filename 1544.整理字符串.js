/*
 * @Author: linqibin
 * @Date: 2022-12-13 11:43:46
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-13 11:51:20
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1544 lang=javascript
 *
 * [1544] 整理字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = []
    for (const char of s) {
        if (!stack.length) {
            stack.push(char)
            continue
        }
        if (Math.abs(char.charCodeAt() - stack[stack.length - 1].charCodeAt()) === 32) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.join('')
};
// @lc code=end

