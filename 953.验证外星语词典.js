/*
 * @Author: linqibin
 * @Date: 2022-11-24 11:02:36
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 11:12:18
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const orderMap = new Map()
    for (let i = 0; i < order.length; i++) {
        orderMap.set(order[i], i)
    }
    for (let i = 1; i < words.length; i++) {
        if (compare(words[i - 1], words[i], orderMap) > 0) {
            return false
        }
    }
    return true
};
var compare = function(word1, word2, map) {
    const minLen = Math.min(word1.length, word2.length)
    for (let i = 0; i < minLen; i++) {
        if (word1[i] === word2[i]) {
            continue
        }
        // word1比word2大
        if (map.get(word1[i]) > map.get(word2[i])) {
            return 1
        } else {
            return -1
        }
    }
    return word1.length > word2.length ? 1 : -1
}
// @lc code=end

