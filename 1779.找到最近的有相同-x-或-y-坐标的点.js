/*
 * @Author: linqibin
 * @Date: 2023-02-02 10:48:36
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-02 10:55:01
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1779 lang=javascript
 *
 * [1779] 找到最近的有相同 X 或 Y 坐标的点
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let min = Infinity, idx = -1
    for (let i = 0; i < points.length; i++) {
        const [px, py] = points[i]
         // 有效点
         if (x === px || y === py) {
            // 曼哈顿距离
            const dis = Math.abs(x - px) + Math.abs(y - py)
            if (dis < min) {
                min = dis
                idx = i
            }
        }
    }
    return idx
};
// @lc code=end

