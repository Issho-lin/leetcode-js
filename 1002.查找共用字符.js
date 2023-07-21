/*
 * @Author: linqibin
 * @Date: 2022-11-25 08:53:59
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-25 09:55:28
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const minFreq = new Array(26).fill(Infinity)
    const freq = new Array(26).fill(0)
    for (const word of words) {
        for (const char of word) {
            freq[char.charCodeAt() - 97] += 1
        }
        minFreq.forEach((val, idx) => {
            minFreq[idx] = Math.min(val, freq[idx])
            freq[idx] = 0
        })
    }
    const res = []
    minFreq.forEach((val, idx) => {
        while (val--) {
            res.push(String.fromCharCode(idx + 97))
        }
    })
    return res
};
// @lc code=end

