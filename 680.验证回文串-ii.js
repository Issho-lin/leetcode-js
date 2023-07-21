/*
 * @Author: linqibin
 * @Date: 2022-11-18 08:49:56
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 09:05:59
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0, right = s.length - 1
    return dfs(s, left, right)
};
var dfs = function(s, left, right, del = 0) {
    while (left < right) {
        if (s[left] === s[right]) {
            left++
            right--
        } else if (del === 0) {
            del = 1
            return dfs(s, left + 1, right, del) || dfs(s, left, right - 1, del)
        } else {
            return false
        }
    }
    return true
}
// @lc code=end

