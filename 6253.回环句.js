/*
 * @Author: linqibin
 * @Date: 2022-12-20 15:43:46
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-20 15:49:38
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=6253 lang=javascript
 *
 * [6253] 回环句
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    if (sentence[0] !== sentence[sentence.length - 1]) {
        return false
    }
    const words = sentence.split(' ')
    for (let i = 0; i < words.length - 1; i++) {
        const cur = words[i], next = words[i + 1]
        if (cur[cur.length - 1] !== next[0]) {
            return false
        }
    }
    return true
};
// @lc code=end

