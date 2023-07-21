/*
 * @Author: linqibin
 * @Date: 2022-10-10 17:55:22
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 15:20:09
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let res = 0
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && roman[s[i]] < roman[s[i + 1]]) {
            res += roman[s[i + 1]] - roman[s[i]]
            i++
        } else {
            res += roman[s[i]]
        }
    }
    return res
};
// @lc code=end

