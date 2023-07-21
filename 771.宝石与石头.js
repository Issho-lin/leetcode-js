/*
 * @Author: linqibin
 * @Date: 2022-11-21 14:31:43
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-21 14:33:31
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const map = new Map()
    for (const stone of stones) {
        map.set(stone, (map.get(stone) || 0) + 1)
    }
    let count = 0
    for (const jewel of jewels) {
        if (map.has(jewel)) {
            count+= map.get(jewel)
        }
    }
    return count
};
// @lc code=end

