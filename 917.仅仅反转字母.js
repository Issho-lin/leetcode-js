/*
 * @Author: linqibin
 * @Date: 2022-11-23 11:37:33
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-23 11:42:44
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let res = '', reverse = ''
    for (let i = s.length - 1; i >= 0; i--) {
        if (/[A-Za-z]/.test(s[i])) {
            reverse += s[i]
        }
    }
    let idx = 0
    for (const char of s) {
        if (/[A-Za-z]/.test(char)) {
            res += reverse[idx++]
        } else {
            res += char
        }
    }
    return res
};
// @lc code=end

