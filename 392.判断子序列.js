/*
 * @Author: linqibin
 * @Date: 2022-11-03 14:35:42
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-03 14:37:55
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const stack = s.split('')
    for (let i = t.length - 1; i >= 0; i--) {
        if (t[i] === stack[stack.length - 1]) {
            stack.pop()
        }
    }
    return stack.length === 0
};
// @lc code=end

