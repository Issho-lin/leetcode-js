/*
 * @Author: linqibin
 * @Date: 2022-11-18 15:50:27
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 15:59:35
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let res = ''
    for (const char of s) {
        if (/[A-Z]/.test(char)) {
            res += String.fromCharCode(char.charCodeAt() + 32)
        } else {
            res += char
        }
    }
    return res
};
// @lc code=end

