/*
 * @Author: linqibin
 * @Date: 2022-11-09 08:53:04
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-09 09:36:47
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let res = 0
    for (let i = 0; i < points.length; i++) {
        const map = new Map()
        // 以points[i]为原点，找出到points[i]距离相同的点
        for (let j = 0; j < points.length; j++) {
            if (i === j) {
                continue
            }
            // 计算点points[j]到原点points[i]的距离
            const x = points[j][0] - points[i][0]
            const y = points[j][1] - points[i][1]
            const dis = x ** 2 + y ** 2
            map.set(dis, (map.get(dis) || 0) + 1)
        }
        for (const value of map.values()) {
            if (value > 1) {
                // An取2：n * (n - 1)
                res += value * (value - 1)
            }
        }
    }
    return res
};
// @lc code=end

