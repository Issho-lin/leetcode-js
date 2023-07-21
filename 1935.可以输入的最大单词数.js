/*
 * @Author: linqibin
 * @Date: 2023-02-10 15:47:09
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-10 15:59:22
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1935 lang=javascript
 *
 * [1935] 可以输入的最大单词数
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const brokenSet = new Set()
    for (const char of brokenLetters) {
        brokenSet.add(char)
    }
    const hasBroken = (word) => {
        for (let i = 0; i < word.length; i++) {
            if (brokenSet.has(word[i])) {
                return true
            }
        }
        return false
    }

    const words = text.split(' ')
    let cnt = 0
    for (const word of words) {
        if (!hasBroken(word)) {
            cnt++
        }
    }
    return cnt
};

// canBeTypedWords("leet code", "e")
// @lc code=end

