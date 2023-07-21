/*
 * @Author: linqibin
 * @Date: 2022-10-13 11:13:07
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 18:01:36
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const ret = []
    const dfs = (row, tmp) => {
        if (row === n) {
            ret.push(
                tmp.map(ci => {
                    const arr = new Array(n).fill('.')
                    arr[ci] = 'Q'
                    return arr.join('')
                })
            )
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
    return ret
};
// @lc code=end

