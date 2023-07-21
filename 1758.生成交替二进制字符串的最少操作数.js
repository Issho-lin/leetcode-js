/*
 * @Author: linqibin
 * @Date: 2023-01-17 18:54:00
 * @LastEditors: linqibin
 * @LastEditTime: 2023-01-17 18:56:32
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1758 lang=javascript
 *
 * [1758] 生成交替二进制字符串的最少操作数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let cnt1 = 0, cnt2 = 0
    // 0101 或 1010
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] !== '0') {
                cnt1++
            } else {
                cnt2++
            }
        } else {
            if (s[i] !== '1') {
                cnt1++
            } else {
                cnt2++
            }
        }
    }
    return Math.min(cnt1, cnt2)
};
// @lc code=end

