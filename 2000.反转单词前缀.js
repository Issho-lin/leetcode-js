/*
 * @Author: linqibin
 * @Date: 2023-02-13 16:53:35
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-13 16:55:59
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2000 lang=javascript
 *
 * [2000] 反转单词前缀
 */

// @lc code=start
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let idx = -1, str = ''
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            idx = i
            break
        }
    }
    for (let i = 0; i < word.length; i++) {
        if (i <= idx) {
            str += word[idx - i]
        } else {
            str += word[i]
        }
    }
    return str
};
// @lc code=end

