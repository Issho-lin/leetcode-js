/*
 * @Author: linqibin
 * @Date: 2022-12-13 15:12:11
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-13 15:31:29
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1576 lang=javascript
 *
 * [1576] 替换所有的问号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    let ret = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '?') {
            ret += s[i]
            continue
        }
        if (i === 0) {
            ret += generateChar(s[i + 1])
        } else if (i === s.length - 1) {
            ret += generateChar(ret[i - 1])
        } else {
            ret += generateChar(ret[i - 1], s[i + 1])
        }
    }
    return ret
};
var generateChar = function(char1, char2) {
    // 97 - 122
    let random = Math.floor(Math.random() * 26) + 97
    if (!char1) {
        return String.fromCharCode(random)
    }
    let num1 = char1.charCodeAt(), num2 = num1
    if (char2) {
        num2 = char2.charCodeAt()
    }
    while (random === num1 || random === num2) {
        random = Math.floor(Math.random() * 26) + 97
    }
    return String.fromCharCode(random)
}
// @lc code=end

