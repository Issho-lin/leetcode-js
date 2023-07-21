/*
 * @Author: linqibin
 * @Date: 2022-12-01 17:45:38
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-01 18:00:22
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m = grid.length, n = grid[0].length
    const sum = m * n, mod = k % sum
    if (mod === 0) {
        return grid
    }
    const ant = new Array(m).fill(0).map(_ => new Array(n).fill(0))
    for (let i = 0; i < sum; i++) {
        const t = (i + mod) % sum
        const r = t / n >> 0, c = t % n
        ant[r][c] = grid[i / n >> 0][i % n]
    }
    return ant
};
// @lc code=end

