/*
 * @Author: linqibin
 * @Date: 2022-12-26 17:44:51
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-26 17:48:57
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2399 lang=javascript
 *
 * [2399] 检查相同字母间的距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode(i + 97)
        const idx = s.indexOf(char)
        if (idx === -1) {
            continue
        }
        const lastIdx = s.lastIndexOf(char)
        const diff = lastIdx - idx - 1
        if (diff !== distance[i]) {
            return false
        }
    }
    return true
};
// @lc code=end

