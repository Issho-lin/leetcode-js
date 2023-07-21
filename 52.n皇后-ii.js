/*
 * @Author: linqibin
 * @Date: 2022-10-13 11:50:27
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 14:10:48
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0
    const dfs = (row, tmp) => {
        if (row === n) {
            count++
            return
        }
        for (let col = 0; col < n; col++) {
            const canNotSet = tmp.some((ci, ri) => {
                return ci === col || ci - ri === col - row || ci + ri === col + row
            })
            if (!canNotSet) {
                dfs(row + 1, [...tmp, col])
            }
        }
    }
    dfs(0, [])
    return count
};
// @lc code=end

