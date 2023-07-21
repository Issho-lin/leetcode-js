/*
 * @Author: linqibin
 * @Date: 2022-11-21 14:43:40
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-21 14:48:15
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const stack = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const set = new Set()
    let str = ''
    for (const word of words) {
        for (const char of word) {
            str += stack[char.charCodeAt() - 97]
        }
        set.add(str)
        str = ''
    }
    return set.size
};
// @lc code=end

