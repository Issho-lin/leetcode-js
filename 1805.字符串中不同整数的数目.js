/*
 * @Author: linqibin
 * @Date: 2023-02-02 11:26:40
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-02 14:10:26
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1805 lang=javascript
 *
 * [1805] 字符串中不同整数的数目
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    const set = new Set()
    let num = ''
    for (const char of word) {
        if (/[0-9]/.test(char)) {
            if (num === '0') {
                num = ''
            }
            num += char
        } else if (num) {
            set.add(num)
            num = ''
        }
    }
    if (num) {
        set.add(num)
    }
    return set.size
};
// numDifferentIntegers('0a0')
// @lc code=end

