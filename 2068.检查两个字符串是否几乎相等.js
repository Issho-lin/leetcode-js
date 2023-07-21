/*
 * @Author: linqibin
 * @Date: 2023-02-20 15:58:05
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-20 16:04:57
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2068 lang=javascript
 *
 * [2068] 检查两个字符串是否几乎相等
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const map = new Map()
    for (const char of word1) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (const char of word2) {
        map.set(char, (map.get(char) || 0) - 1)
    }
    for (const v of map.values()) {
        if (Math.abs(v) > 3) {
            return false
        }
    }
    return true
};

// checkAlmostEquivalent('abcdeef', 'abaaacc')
// @lc code=end

