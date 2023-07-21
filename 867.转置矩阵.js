/*
 * @Author: linqibin
 * @Date: 2022-11-22 17:20:38
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 17:33:36
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const m = matrix.length, n = matrix[0].length
    const grid = new Array(n).fill(0).map(_ => new Array(m))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            grid[j][i] = matrix[i][j]
        }
    }
    return grid
};
// @lc code=end

