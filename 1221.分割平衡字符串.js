/*
 * @Author: linqibin
 * @Date: 2022-12-01 16:53:48
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-01 16:55:36
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let R = '', L = '', count = 0
    for (const char of s) {
        if (char === 'R') {
            R += char
        } else {
            L += char
        }
        if (R.length === L.length) {
            count++
            R = ''
            L = ''
        }
    }
    return count
};
// @lc code=end

