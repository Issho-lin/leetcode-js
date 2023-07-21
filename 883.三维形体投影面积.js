/*
 * @Author: linqibin
 * @Date: 2022-11-22 18:32:51
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 18:44:16
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    // Sxy = 立方体不为0的格子数，Sxz = 同行最大值累加，Syz = 同列最大值累加
    const m = grid.length, n = grid[0].length
    let Sxy = 0, Sxz = 0, Syz = 0, maxm = -Infinity, maxn = -Infinity
    // 同行取最大值累加
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            maxm = Math.max(maxm, grid[i][j])
            if (grid[i][j] !== 0) {
                Sxy += 1
            }
        }
        Sxz += maxm
        maxm = -Infinity
    }
    // 同列取最大值累加
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            maxn = Math.max(maxn, grid[j][i])
        }
        Syz += maxn
        maxn = -Infinity
    }
    return Sxy + Sxz + Syz
};
// @lc code=end

