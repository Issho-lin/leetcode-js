/*
 * @Author: linqibin
 * @Date: 2023-02-13 17:40:51
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-20 15:47:47
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2047 lang=javascript
 *
 * [2047] 句子中的有效单词数
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    const words = sentence.split(' ')
    let cnt = 0
    for (const word of words) {
        if (/[0-9]/.test(word) || !word) {
            continue
        }
        const splitIdx = word.indexOf('-')
        if (splitIdx === 0 || splitIdx === word.length - 1) {
            continue
        }
        if (splitIdx > 0) {
            if (splitIdx !== word.lastIndexOf('-')) {
                continue
            }
            if (!(/[a-z]/.test(word[splitIdx - 1])) || !(/[a-z]/.test(word[splitIdx + 1]))) {
                continue
            }
        }
        const idx1 = word.indexOf('!'), idx2 = word.indexOf('.'), idx3 = word.indexOf(',')
        if (idx1 !== -1 && idx2 !== -1 || idx1 !== -1 && idx3 !== -1 || idx2 !== -1 && idx3 !== -1) {
            continue
        }
        if (idx1 !== -1 && idx1 !== word.length - 1) {
            continue
        }
        if (idx2 !== -1 && idx2 !== word.length - 1) {
            continue
        }
        if (idx3 !== -1 && idx3 !== word.length - 1) {
            continue
        }
        cnt++
    }
    return cnt
};

countValidWords("-")
// @lc code=end

