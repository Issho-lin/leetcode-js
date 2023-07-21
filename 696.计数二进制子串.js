/*
 * @Author: linqibin
 * @Date: 2022-11-18 09:21:22
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 09:49:25
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    // let last = 0, cur = 1, res = 0
    // for (let i = 1; i < s.length; i++) {
    //     if (s[i] === s[i - 1]) {
    //         cur++
    //     } else {
    //         last = cur
    //         cur = 1
    //     }
    //     if (last >= cur) {
    //         res++
    //     }
    // }
    // return res
    let stack = [], count = 1, res = 0
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++
        } else {
            stack.push(count)
            count = 1
        }
        if (i === s.length - 1) {
            stack.push(count)
        }
    }
    for (let i = 0; i < stack.length - 1; i++) {
        res += Math.min(stack[i], stack[i + 1])
    }
    return res
};
// @lc code=end

