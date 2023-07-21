/*
 * @Author: linqibin
 * @Date: 2022-12-13 15:03:48
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-13 15:05:11
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1572 lang=javascript
 *
 * [1572] 矩阵对角线元素的和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length
    let sum = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j || i + j === n - 1) {
                sum += mat[i][j]
            }
        }
    }
    return sum
};
// @lc code=end

