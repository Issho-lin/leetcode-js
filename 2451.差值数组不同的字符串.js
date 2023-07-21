/*
 * @Author: linqibin
 * @Date: 2022-12-20 17:47:28
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-23 09:12:45
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2451 lang=javascript
 *
 * [2451] 差值数组不同的字符串
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    const stack = [], cnt = {}, map = {}
    for (const word of words) {
        for (let i = 1; i < word.length; i++) {
            stack.push(word[i].charCodeAt() - word[i - 1].charCodeAt())
        }
        // console.log(word, stack.join(','));
        const str = stack.join(',')
        cnt[str] = (cnt[str] || 0) + 1
        map[word] = str
        stack.splice(0, stack.length)
    }
    for (const key in map) {
        if (cnt[map[key]] === 1) {
            return key
        }
    }
};
// @lc code=end

