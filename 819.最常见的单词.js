/*
 * @Author: linqibin
 * @Date: 2022-11-22 11:57:57
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 14:31:02
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const filterSet = new Set(banned)
    const map = new Map()
    let word = ''
    for (let i = 0; i < paragraph.length; i++) {
        if (/[^A-Za-z]/.test(paragraph[i])) {
            if (word && !filterSet.has(word)) {
                map.set(word, (map.get(word) || 0) + 1)
            }
            word = ''
            continue
        }
        word += (paragraph[i].toLowerCase())
        if (i === paragraph.length - 1) {
            if (word && !filterSet.has(word)) {
                map.set(word, (map.get(word) || 0) + 1)
            }
        }
    }
    // console.log(map);

    let max = -Infinity, ret = ''
    for (const [key, value] of map.entries()) {
        if (value > max) {
            max = value
            ret = key
        }
    }
    return ret
};
// mostCommonWord('Bob', [])
// @lc code=end

