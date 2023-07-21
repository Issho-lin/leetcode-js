/*
 * @Author: linqibin
 * @Date: 2022-11-25 10:05:08
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-25 10:16:57
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    const ret = []
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const dist = Math.abs(i - rCenter) + Math.abs(j - cCenter)
            ret.push([i, j, dist])
        }
    }
    return ret.sort((a, b) => a[2] - b[2]).map(([i, j]) => [i, j])
};
// @lc code=end

