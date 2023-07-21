/*
 * @Author: linqibin
 * @Date: 2022-12-23 11:42:14
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-23 14:23:36
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2423 lang=javascript
 *
 * [2423] 删除字符使频率相同
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    const map = new Map()
    for (const char of word) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    const counts = [...map.values()]
    // 所有元素相同
    if (counts.length === 1) {
        return true
    }
    // 全部为1
    if (counts.every(cnt => cnt === 1)) {
        return true
    }
    const set = new Set(counts)
    // 只有一个1，其他的都相等
    if (set.size === 2 && counts.filter(cnt => cnt === 1).length === 1) {
        return true
    }
    // 有一个比其他的大1
    const max = Math.max(...counts), min = Math.min(...counts)
    if (set.size === 2 && counts.filter(cnt => cnt === max).length === 1 && max - min === 1) {
        return true
    }
    return false
};

// equalFrequency('abcc')
// @lc code=end

