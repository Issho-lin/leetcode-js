/*
 * @Author: linqibin
 * @Date: 2022-12-01 18:37:16
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-01 18:46:15
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1266 lang=javascript
 *
 * [1266] 访问所有点的最小时间
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let sec = 0
    for (let i = 1; i < points.length; i++) {
        const [x1, y1] = points[i - 1]
        const [x2, y2] = points[i]
        if (x1 === x2 && y1 === y2) {
            continue
        }
        if (x1 === x2) {
            sec += Math.abs(y1 - y2)
        } else if (y1 === y2) {
            sec += Math.abs(x1 - x2)
        } else {
            sec += Math.max(Math.abs(y1 - y2), Math.abs(x1 - x2))
        }
    }
    return sec
};
// @lc code=end

