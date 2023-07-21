/*
 * @Author: linqibin
 * @Date: 2022-12-01 16:56:56
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-01 17:12:55
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    // 两点确定一条直线
    if (coordinates.length === 2) {
        return true
    }
    // x相等
    if (coordinates.every(item => item[0] === coordinates[0][0])) {
        return true
    }
    const [x1, y1] = coordinates[0]
    const [x2, y2] = coordinates[1]
    // (y1 - y2) * (x1 - x3) = (y1 - y3) * (x1 - x2)
    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i]
        if ((y1 - y2) * (x1 - x) !== (y1 - y) * (x1 - x2)) {
            return false
        }
    }
    return true
};
// @lc code=end

