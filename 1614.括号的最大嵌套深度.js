/*
 * @Author: linqibin
 * @Date: 2022-12-15 17:50:46
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-15 17:53:06
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max = 0
    const stack = []
    for (const char of s) {
        if (char === '(') {
            stack.push(char)
            max = Math.max(max, stack.length)
        } else if (char === ')') {
            stack.pop()
        }
    }
    return max
};
// @lc code=end

