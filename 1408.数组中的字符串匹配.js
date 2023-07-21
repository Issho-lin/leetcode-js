/*
 * @Author: linqibin
 * @Date: 2022-12-05 14:15:10
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 14:20:43
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const ret = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i === j) {
                continue
            }
            if (words[j].includes(words[i]) && !ret.includes(words[i])) {
                ret.push(words[i])
            }
        }
    }
    return ret
};
// @lc code=end

