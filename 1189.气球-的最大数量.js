/*
 * @Author: linqibin
 * @Date: 2022-11-29 15:10:31
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 15:18:27
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const map = new Map()
    for (const char of 'balloon') {
        map.set(char, 0)
    }
    for (const char of text) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        }
    }
    let min = Infinity
    for (const [key, val] of map.entries()) {
        if (key === 'l' || key === 'o') {
            min = Math.min(min, val / 2 >> 0)
        } else {
            min = Math.min(min, val)
        }
    }
    return min === Infinity ? 0 : min
};
// @lc code=end

