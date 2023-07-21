/*
 * @Author: linqibin
 * @Date: 2022-11-29 14:58:36
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 15:00:16
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map()
    for (const item of arr) {
        map.set(item, (map.get(item) || 0) + 1)
    }
    const set = new Set()
    for (const value of map.values()) {
        set.add(value)
    }
    return map.size === set.size
};
// @lc code=end

