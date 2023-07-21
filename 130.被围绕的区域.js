/*
 * @Author: linqibin
 * @Date: 2022-10-20 16:16:31
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-21 09:07:30
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    /**
     * 思路：
     * 1.找出能和四条边上的‘O’连通的所有‘O’，只要能连通，说明不会被‘X’包围，
     * 2.将其暂时标记为‘N’，剩余的未被标记的‘O’就是被‘X’包围的
     * 3.把剩余的‘O’置为‘X’，再把标记为‘N’的点重置为‘O’
     */
    const m = board.length
    if (!m) {
        return
    }
    const n = board[0].length
    const dfs = (i, j) => {
        if (i < 0 || i > m - 1 || j < 0 || j > n - 1) {
            return
        }
        if (board[i][j] === 'O') {
            // 标记为N
            board[i][j] = 'N'
            // 递归查找其上下左右的点
            dfs(i - 1, j)
            dfs(i + 1, j)
            dfs(i, j - 1)
            dfs(i, j + 1)
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 从四条边上开始查找
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                dfs(i, j)
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 把剩余的O改为X
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            } else if (board[i][j] === 'N') {
                // 把N重置为O
                board[i][j] = 'O'
            }
        }
    }
};
// @lc code=end

