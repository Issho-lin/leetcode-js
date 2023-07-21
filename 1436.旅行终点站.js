/*
 * @Author: linqibin
 * @Date: 2022-12-05 16:02:27
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 16:08:00
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const startSet = new Set()
    for (const [start] of paths) {
        startSet.add(start)
    }
    for (const [_, end] of paths) {
        if (!startSet.has(end)) {
            return end
        }
    }
};
// @lc code=end

