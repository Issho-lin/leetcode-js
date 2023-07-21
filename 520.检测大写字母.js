/*
 * @Author: linqibin
 * @Date: 2022-11-14 16:07:34
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-14 16:41:45
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    for (let i = 1; i < word.length; i++) {
        if (word[0].toLowerCase() === word[0]) {
            if (word[i].toUpperCase() === word[i]) {
                return false
            }
        } else if (i < word.length - 1) {
            if (word[i].toUpperCase() === word[i] && word[i + 1].toLowerCase() === word[i + 1]) {
                return false
            }
            if (word[i].toLowerCase() === word[i] && word[i + 1].toUpperCase() === word[i + 1]) {
                return false
            }
        }
    }
    return true
};
// @lc code=end

