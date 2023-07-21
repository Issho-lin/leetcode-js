/*
 * @Author: linqibin
 * @Date: 2023-01-16 17:30:59
 * @LastEditors: linqibin
 * @LastEditTime: 2023-01-16 17:33:37
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1704 lang=javascript
 *
 * [1704] 判断字符串的两半是否相似
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const length = s.length
    let a = 0, b = 0
    const vowel = new Set(['a','e','i','o','u','A','E','I','O','U'])
    for (let i = 0; i < length / 2; i++) {
        if (vowel.has(s[i])) {
            a++
        }
        if (vowel.has(s[i + length / 2])) {
            b++
        }
    }
    return a === b
};
// @lc code=end

