/*
 * @Author: linqibin
 * @Date: 2022-11-23 11:44:29
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-23 14:46:52
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const map = new Map()
    for (const item of deck) {
        map.set(item, (map.get(item) || 0) + 1)
    }
    const counts = [...map.values()]
    const min = Math.min(...counts)
    if (min < 2) {
        return false
    }
    let g = min
    for (const count of counts) {
        g = gcd(g, count)
        if (g === 1) {
            return false
        }
    }
    return true
};
var gcd = function(a, b) {
    return a % b === 0 ? b : gcd(b, a % b)
}
// @lc code=end

