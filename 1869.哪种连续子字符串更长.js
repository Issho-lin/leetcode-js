/*
 * @Author: linqibin
 * @Date: 2023-02-02 17:52:33
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-02 17:59:14
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1869 lang=javascript
 *
 * [1869] 哪种连续子字符串更长
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let cur1 = 0, cur0 = 0
    let max1 = 0, max0 = 0
    for (const char of s) {
        if (char === '1') {
            cur1++
            max0 = Math.max(max0, cur0)
            cur0 = 0
        } else {
            cur0++
            max1 = Math.max(max1, cur1)
            cur1 = 0
        }
    }
    if (cur0 > 0) {
        max0 = Math.max(max0, cur0)
    }
    if (cur1 > 0) {
        max1 = Math.max(max1, cur1)
    }
    // console.log(max1, max0);
    return max1 > max0
};

// checkZeroOnes('111000')
// @lc code=end

