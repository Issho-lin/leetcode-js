/*
 * @Author: linqibin
 * @Date: 2022-11-23 08:56:56
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-23 10:12:08
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 三维形体的表面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    const m = grid.length, n = grid[0].length
    // 总表面积 = 所有立方体的表面积 - 被贴合的面的总面积
    let blocks = 0, covers = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            blocks += grid[i][j]
            // 同一个格子，立方体堆叠贴合的面
            covers += Math.max(grid[i][j] - 1, 0)
            // 同一行，前一列贴合的面
            if (j > 0) {
                covers += Math.min(grid[i][j], grid[i][j - 1])
            }
            // 同一列，前一行贴合的面
            if (i > 0) {
                covers += Math.min(grid[i][j], grid[i - 1][j])
            }
        }
    }
    return blocks * 6 - covers * 2
};
// @lc code=end

