/*
 * @Author: linqibin
 * @Date: 2022-11-22 16:33:25
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 16:46:04
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) {
        return false
    }
    // 如果两个字符串相等，只要字符串中有重复字符，即可完成
    if (s === goal) {
        return s.length !== new Set(goal).size
    }
    let A = '', B = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            A += s[i]
            B = goal[i] + B
        }
    }
    return A === B && A.length === 2
};
// @lc code=end

