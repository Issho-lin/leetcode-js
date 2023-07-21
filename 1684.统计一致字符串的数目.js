/*
 * @Author: linqibin
 * @Date: 2022-12-16 11:50:41
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-16 11:58:02
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1684 lang=javascript
 *
 * [1684] 统计一致字符串的数目
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const set = new Set([...allowed])
    // console.log(set);
    let cnt = 0
    const isValid = (word) => {
        for (const char of word) {
            if (!set.has(char)) {
                return false
            }
        }
        return true
    }
    for (const word of words) {
        if (isValid(word)) {
            cnt++
        }
    }
    return cnt
};

// countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])
// @lc code=end

