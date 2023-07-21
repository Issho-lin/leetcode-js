/*
 * @Author: linqibin
 * @Date: 2022-12-05 15:50:06
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 15:53:27
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let oneCount = 0
    for (const item of s) {
        if (item === '1') {
            oneCount++
        }
    }
    let zeroCount = 0, max = -Infinity
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '1') {
            oneCount--
        } else {
            zeroCount++
        }
        max = Math.max(max, oneCount + zeroCount)
    }
    return max
};
// @lc code=end

