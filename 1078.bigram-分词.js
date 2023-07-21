/*
 * @Author: linqibin
 * @Date: 2022-11-29 10:49:25
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 10:51:15
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const words = text.split(' ')
    const ret = []
    for (let i = 0; i < words.length; i++) {
        if (words[i] === first && words[i + 1] === second) {
            if (words[i + 2]) {
                ret.push(words[i + 2])
            }
        }
    }
    return ret
};
// @lc code=end

