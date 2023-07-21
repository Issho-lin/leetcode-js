/*
 * @Author: linqibin
 * @Date: 2023-01-17 10:42:29
 * @LastEditors: linqibin
 * @LastEditTime: 2023-01-17 10:44:50
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1725 lang=javascript
 *
 * [1725] 可以形成最大正方形的矩形数目
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    const areaMap = new Map()
    let max = 0
    for (const [l, w] of rectangles) {
        const area = Math.min(l, w) ** 2
        max = Math.max(max, area)
        areaMap.set(area, (areaMap.get(area) || 0) + 1)
    }
    return areaMap.get(max)
};
// @lc code=end

