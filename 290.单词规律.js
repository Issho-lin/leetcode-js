/*
 * @Author: linqibin
 * @Date: 2022-11-01 14:16:20
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-01 14:34:26
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const stack = s.split(' ')
    if (stack.length !== pattern.length) {
        return false
    }
    const map = new Map()
    let str = ''
    for (let i = 0; i < stack.length; i++) {
        if (map.has(stack[i]) && pattern[i] !== map.get(stack[i])) {
            return false
        }
        if (!map.has(stack[i]) && str.includes(pattern[i])) {
            return false
        }
        str += pattern[i]
        map.set(stack[i], pattern[i])
    }
    return true
};
// @lc code=end

