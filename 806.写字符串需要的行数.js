/*
 * @Author: linqibin
 * @Date: 2022-11-21 14:51:08
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-21 15:01:56
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let total = 0, line = 1
    for (const char of s) {
        const unit = widths[char.charCodeAt() - 97]
        if (total + unit > 100) {
            total = 0
            line++
        }
        total += unit
    }
    return [line, total]
};
// @lc code=end

