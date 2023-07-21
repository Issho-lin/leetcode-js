/*
 * @Author: linqibin
 * @Date: 2022-10-11 10:09:34
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 15:41:58
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i])
        } else if (map[stack.pop()] !== s[i]) {
            return false
        }
    }
    return !stack.length
};
// @lc code=end

