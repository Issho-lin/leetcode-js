/*
 * @Author: linqibin
 * @Date: 2022-11-22 16:29:32
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 16:31:14
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stack1 = [], stack2 = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            stack1.pop()
        } else {
            stack1.push(s[i])
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] === '#') {
            stack2.pop()
        } else {
            stack2.push(t[i])
        }
    }
    return stack1.join() === stack2.join()
};
// @lc code=end

