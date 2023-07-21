/*
 * @Author: linqibin
 * @Date: 2022-12-13 15:33:24
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-13 15:40:13
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1582 lang=javascript
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const m = mat.length, n = mat[0].length
    const searchRow = (i) => {
        return mat[i].reduce((a, b) => a + b) === 1
    }
    const searchCol = (j) => {
        let sum = 0
        for (let i = 0; i < m; i++) {
            sum += mat[i][j]
        }
        return sum === 1
    }
    let cnt = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                if (searchRow(i) && searchCol(j)) {
                    cnt++
                }
            }
        }
    }
    return cnt
};

// @lc code=end

