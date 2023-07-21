/*
 * @Author: linqibin
 * @Date: 2022-12-01 17:15:46
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-01 17:41:41
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    // 偶数：奇数行 * 奇数列 + 偶数行 * n - 偶数行 * 奇数列
    // 偶数行包括0，即没有操作过的
    const row = new Array(m).fill(0), col = new Array(n).fill(0)
    for (const [r, c] of indices) {
        row[r]++
        col[c]++
    }
    let oddR = 0, oddC = 0
    for (const r of row) {
        if (r % 2 !== 0) {
            oddR++
        }
    }
    for (const c of col) {
        if (c % 2 !== 0) {
            oddC++
        }
    }
    return m * n - (oddR * oddC + ((m - oddR) * n - (m - oddR) * oddC))
};
// @lc code=end

