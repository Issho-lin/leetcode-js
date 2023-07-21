/*
 * @Author: linqibin
 * @Date: 2022-10-10 15:51:57
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 15:08:24
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let idx = 0, flag = 1, ans = 0
    const MAX = 2 ** 31 - 1, MIN = (-2) ** 31
    const MAX_PRE = MAX / 10 >> 0, MAX_D = MAX % 10
    while (s[idx] === ' ') {
        idx++
    }
    if (s[idx] === '+') {
        idx++
    } else if (s[idx] === '-') {
        flag = -1
        idx++
    }
    while (s[idx]) {
        if (s[idx] < '0' || s[idx] > '9') {
            break
        }
        if (ans > MAX_PRE || ans === MAX_PRE && (+s[idx]) > MAX_D) {
            return flag > 0 ? MAX : MIN
        }
        ans = ans * 10 + (+s[idx])
        idx++
    }
    return ans * flag
}
// @lc code=end

