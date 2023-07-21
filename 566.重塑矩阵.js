/*
 * @Author: linqibin
 * @Date: 2022-11-16 11:23:53
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-16 11:52:09
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const m = mat.length, n = mat[0].length
    if (m * n !== r * c) {
        return mat
    }
    if (m === r && n === c) {
        return mat
    }
    const ans = []
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            // 第几个元素
            const idx = i * c + j
            // 在原矩阵中的位置
            const x = idx / n >> 0, y = idx % n
            if (!ans[i]) {
                ans[i] = []
            }
            ans[i][j] = mat[x][y]
        }
    }
    return ans
};
// @lc code=end

