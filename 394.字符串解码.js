/*
 * @Author: linqibin
 * @Date: 2022-11-04 08:31:18
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-04 10:39:56
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let str = '', num = 0
    const strStack = [], numStack = []
    for (let i = 0; i < s.length; i++) {
        if (/[0-9]/.test(s[i])) {
            num = num * 10 + Number(s[i])
        } else if (s[i] === '[') {
            numStack.push(num)
            num = 0
            strStack.push(str)
            str = ''
        } else if (s[i] === ']') {
            str = strStack.pop() + str.repeat(numStack.pop())
        } else {
            str += s[i]
        }
    }
    return str
};
// @lc code=end

