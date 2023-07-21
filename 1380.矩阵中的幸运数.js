/*
 * @Author: linqibin
 * @Date: 2022-12-05 08:35:18
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 08:54:08
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const m = matrix.length, n = matrix[0].length
    let min = Infinity
    const stack = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j]
                stack[i] = [i, j, min]
            }
        }
        min = Infinity
    }
    // console.log(stack);

    const isMaxInCol = (i, j, val) => {
        for (let r = i + 1; r < m; r++) {
            if (matrix[r][j] > val) {
                return false
            }
        }
        for (let r = i - 1; r >= 0; r--) {
            if (matrix[r][j] > val) {
                return false
            } 
        }
        return true
    }
    for (const [i, j, val] of stack) {
        if (isMaxInCol(i, j, val)) {
            return [val]
        }
    }
    return []
};
// @lc code=end

