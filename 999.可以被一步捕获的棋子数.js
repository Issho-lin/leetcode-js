/*
 * @Author: linqibin
 * @Date: 2022-11-25 08:36:48
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-25 08:49:28
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 可以被一步捕获的棋子数
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    const m = board.length, n = board[0].length
    let count = 0
    const dfs = (i, j, dir) => {
        // 到达边缘
        if (i < 0 || i >=m || j < 0 || j >= n) {
            return
        }
        // 遇到友方棋子
        if (board[i][j] === 'B') {
            return
        }
        // 遇到黑色卒子
        if (board[i][j] === 'p') {
            count++
            return
        }
        if (dir === 'top') {
            dfs(i - 1, j, dir)
        } else if (dir === 'bottom') {
            dfs(i + 1, j, dir)
        } else if (dir === 'left') {
            dfs(i, j - 1, dir)
        } else {
            dfs(i, j + 1, dir)
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 先找到车的位置
            if (board[i][j] === 'R') {
                // 向上下左右搜索
                dfs(i - 1, j, 'top')
                dfs(i + 1, j, 'bottom')
                dfs(i, j - 1, 'left')
                dfs(i, j + 1, 'right')
            }            
        }
    }
    return count
};
// @lc code=end

