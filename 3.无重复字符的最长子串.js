/*
 * @Author: linqibin
 * @Date: 2022-10-10 15:27:53
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 14:56:23
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const stack = []
    let max = 0
    for (let i = 0; i < s.length; i++) {
        const idx = stack.indexOf(s[i])
        if (idx !== -1) {
            max = Math.max(max, stack.length)
            stack.splice(0, idx + 1)
        }
        stack.push(s[i])
    }
    return Math.max(max, stack.length)
};
// @lc code=end

