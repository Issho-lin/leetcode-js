/*
 * @Author: linqibin
 * @Date: 2023-02-10 16:43:30
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-10 16:44:51
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1967 lang=javascript
 *
 * [1967] 作为子字符串出现在单词中的字符串数目
 */

// @lc code=start
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let cnt = 0
    for (const str of patterns) {
        if (word.includes(str)) {
            cnt++
        }
    }
    return cnt
};
// @lc code=end

