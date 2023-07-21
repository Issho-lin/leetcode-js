/*
 * @Author: linqibin
 * @Date: 2022-11-22 18:48:58
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-23 08:41:29
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const stack1 = s1.split(' '), stack2 = s2.split(' ')
    const stack = []
    const map1 = new Map(), map2 = new Map()
    for (const item of stack1) {
        map1.set(item, (map1.get(item) || 0) + 1)
    }
    for (const item of stack2) {
        map2.set(item, (map2.get(item) || 0) + 1)
    }
    for (const [key, value] of map1.entries()) {
        if (value === 1 && !map2.has(key)) {
            stack.push(key)
        }
    }
    for (const [key, value] of map2.entries()) {
        if (value === 1 && !map1.has(key)) {
            stack.push(key)
        }
    }
    return stack
};
// @lc code=end

