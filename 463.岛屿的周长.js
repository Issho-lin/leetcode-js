/*
 * @Author: linqibin
 * @Date: 2022-11-15 17:22:15
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-15 17:26:08
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const m = grid.length, n = grid[0].length
    let sum = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                if (i - 1 < 0 || grid[i - 1][j] === 0) {
                    sum++
                }
                if (i + 1 >= m || grid[i + 1][j] === 0) {
                    sum++
                }
                if (j - 1 < 0 || grid[i][j - 1] === 0) {
                    sum++
                }
                if (j + 1 >= n || grid[i][j + 1] === 0) {
                    sum++
                }
            }
        }
    }
    return sum
};
// @lc code=end

