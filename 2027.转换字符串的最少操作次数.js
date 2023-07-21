/*
 * @Author: linqibin
 * @Date: 2023-02-13 17:12:57
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-13 17:22:47
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2027 lang=javascript
 *
 * [2027] 转换字符串的最少操作次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let cnt = 0, idx = 0
    while (idx < s.length) {
        if (s[idx] === 'X') {
            cnt++
            idx += 3
        } else {
            idx++
        }
    }
    return cnt
};
// @lc code=end

