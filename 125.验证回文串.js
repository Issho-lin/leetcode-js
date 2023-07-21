/*
 * @Author: linqibin
 * @Date: 2022-10-20 15:54:45
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-20 16:12:36
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0, right = s.length - 1
    const reg = /[A-Za-z0-9]/
    while (left < right) {
        while (!reg.test(s[left])) {
            left++
        }
        while (!reg.test(s[right])) {
            right--
        }
        if (left >= right) {
            return true
        }
        if (s[left++].toLowerCase() !== s[right--].toLowerCase()) {
            return false
        }
    }
    return true
};
// @lc code=end

