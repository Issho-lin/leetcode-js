/*
 * @Author: linqibin
 * @Date: 2022-12-15 15:24:52
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-15 15:33:53
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1592 lang=javascript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let spaceCount = 0, word = ''
    const words = []
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            spaceCount++
            if (word) {
                words.push(word)
                word = ''
            } 
        } else {
            word += text[i]
        }
    }
    if (word) {
        words.push(word)
    }
    const wordCount = words.length
    if (wordCount === 1) {
        return words.join('') + (' '.repeat(spaceCount))
    }
    const cnt = spaceCount / (wordCount - 1) >> 0, mod = spaceCount % (wordCount - 1)
    // console.log(spaceCount, words, cnt, mod);
    return words.join(' '.repeat(cnt)) + (' '.repeat(mod))
};
// @lc code=end

