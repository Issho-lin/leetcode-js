/*
 * @Author: linqibin
 * @Date: 2023-02-02 11:06:28
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-02 11:21:14
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1796 lang=javascript
 *
 * [1796] 字符串中第二大的数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let max1 = -1, max2 = -1
    for (let i = 0; i < s.length; i++) {
        if (/[0-9]/.test(s[i])) {
            if (+s[i] > max1) {
                max2 = max1
                max1 = +s[i]
            } else if (+s[i] > max2 && +s[i] !== max1) {
                max2 = +s[i]
            }
        }
    }
    return max1 === max2 ? -1 : max2
};

// @lc code=end

