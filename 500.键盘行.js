/*
 * @Author: linqibin
 * @Date: 2022-11-11 15:04:57
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-11 15:18:36
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const res = []
    const map = new Map()
    const keyboard = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    for (let i = 0; i < keyboard.length; i++) {
        const keys = keyboard[i]
        for (let j = 0; j < keys.length; j++) {
            map.set(keys[j], i)
        }
    }
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        if (judgeSameLine(word.toLowerCase(), map)) {
            res.push(word)
        }
    }
    return res
};
var judgeSameLine = function(word, map) {
    const line = map.get(word[0])
    for (let i = 1; i < word.length; i++) {
        if (line !== map.get(word[i])) {
            return false
        }
    }
    return true
}
// @lc code=end

