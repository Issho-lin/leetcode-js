/*
 * @Author: linqibin
 * @Date: 2023-02-02 10:44:36
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-02 10:45:59
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let idx1 = 0, idx2 = 0, str = ''
    while (word1[idx1] || word2[idx2]) {
        if (word1[idx1]) {
            str += word1[idx1++]
        }
        if (word2[idx2]) {
            str += word2[idx2++]
        }
    }
    return str
};
// @lc code=end

