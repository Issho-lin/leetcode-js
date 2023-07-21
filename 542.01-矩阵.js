/*
 * @Author: linqibin
 * @Date: 2022-11-14 17:39:25
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-15 10:15:20
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length, n = mat[0].length
    const queue = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j])
            } else {
                mat[i][j] = -1
            }
        }
    }
    let dist = 0
    while (queue.length) {
        let { length } = queue
        dist++
        while (length--) {
            const [i, j] = queue.shift()
            if (i - 1 >= 0 && mat[i - 1][j] === -1) {
                mat[i - 1][j] = dist
                queue.push([i - 1, j])
            }
            if (i + 1 < m && mat[i + 1][j] === -1) {
                mat[i + 1][j] = dist
                queue.push([i + 1, j])
            }
            if (j - 1 >= 0 && mat[i][j - 1] === -1) {
                mat[i][j - 1] = dist
                queue.push([i, j - 1])
            }
            if (j + 1 < n && mat[i][j + 1] === -1) {
                mat[i][j + 1] = dist
                queue.push([i, j + 1])
            }
        }
    }
    return mat
};
// @lc code=end

