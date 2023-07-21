/*
 * @Author: linqibin
 * @Date: 2022-11-22 14:37:19
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 15:22:03
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const stack = new Array(s.length).fill(0)
    const cIdx = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            cIdx.push(i)
        }
    }
    for (let i = 0; i < s.length; i++) {
        stack[i] = findC(i, cIdx)
    }
    return stack
};
var findC = function(idx, cIdx) {
    let min = Infinity
    for (const i of cIdx) {
        min = Math.min(min, Math.abs(i - idx))
        if (i >= idx) {
            break
        }
    }
    return min
}
// @lc code=end

