/*
 * @Author: linqibin
 * @Date: 2022-11-08 18:44:04
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-08 18:47:52
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            if (i > 0 && s[i - 1] !== ' ') {
                count++
            }
        } else if (i === s.length - 1) {
            count++
        }
    }
    return count
};
// @lc code=end

