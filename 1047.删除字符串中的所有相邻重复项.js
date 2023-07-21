/*
 * @Author: linqibin
 * @Date: 2022-11-29 10:05:54
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 10:16:45
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('')
};
// @lc code=end

