/*
 * @Author: linqibin
 * @Date: 2022-11-22 15:27:02
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 15:35:41
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const vowel = new Set(['a', 'e', 'i', 'o', 'u'])
    const words = sentence.split(' ')
    for (let i = 0; i < words.length; i++) {
        if (vowel.has(words[i][0].toLowerCase())) {
            words[i] += ('ma' + 'a'.repeat(i + 1))
        } else {
            words[i] = words[i].slice(1) + words[i][0] + 'ma' + 'a'.repeat(i + 1)
        }
    }
    return words.join(' ')
};
// @lc code=end

