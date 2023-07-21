/*
 * @Author: linqibin
 * @Date: 2022-11-29 15:47:10
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 15:55:13
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const map = new Map()
    for (const char of chars) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    let count = 0
    for (const word of words) {
        const charMap = new Map(map)
        let flag = true
        for (const char of word) {
            if (!charMap.has(char)) {
                flag = false
                break
            }
            const count = charMap.get(char)
            if (count - 1 === 0) {
                charMap.delete(char)
            } else {
                charMap.set(char, count - 1)
            }
        }
        if (flag) {
            count += word.length
        }
    }
    return count
};
// @lc code=end

