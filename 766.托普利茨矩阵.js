/*
 * @Author: linqibin
 * @Date: 2022-11-21 11:59:03
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-21 14:29:33
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    const m = matrix.length, n = matrix[0].length
    const dfs = (i, j, target) => {
        if (i >= m || j >= n) {
            return true
        }
        if (matrix[i][j] !== target) {
            return false
        }
        return dfs(i + 1, j + 1, target)
    }
    for (let i = 0; i < n; i++) {
        if (!dfs(0, i, matrix[0][i])) {
            return false
        }
        
    }
    for (let i = 1; i < m; i++) {
        if (!dfs(i, 0, matrix[i][0])) {
            return false
        }
    }
    return true
};

// isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]])
// @lc code=end

