/*
 * @Author: linqibin
 * @Date: 2023-02-02 11:03:03
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-02 11:05:57
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1790 lang=javascript
 *
 * [1790] 仅执行一次字符串交换能否使两个字符串相等
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) {
        return true
    }
    let idx = []
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            idx.push(i)
        }
    }
    if (idx.length > 2) {
        return false
    }
    if (s1[idx[0]] === s2[idx[1]] && s1[idx[1]] === s2[idx[0]]) {
        return true
    }
    return false
};
// @lc code=end

