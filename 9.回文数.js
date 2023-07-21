/*
 * @Author: linqibin
 * @Date: 2022-10-10 17:38:01
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 15:13:11
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    if (x < 10) {
        return true
    }
    if (x % 10 === 0) {
        return false
    }
    const s = x.toString()
    let left = 0, right = s.length - 1
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
};
// @lc code=end

