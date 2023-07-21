/*
 * @Author: linqibin
 * @Date: 2022-10-17 16:53:06
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-17 18:36:20
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length, n = board[0].length
    const used = new Array(m).fill(0).map(() => new Array(n))
    const find = (row, col, i) => {
        // word字符已匹配完毕
        if (i > word.length - 1) {
            return true
        }
        // 边界检测
        if (row < 0 || row >= m || col < 0 || col >= n) {
            return false
        }
        // 如果当前矩阵位置的字符和word相应的字符不匹配，或者，该位置已经匹配过了
        if (board[row][col] !== word[i] || used[row][col]) {
            return false
        }
        // 如果匹配，则记录该位置为已使用
        used[row][col] = true
        // 然后进行word的下一个字符匹配，查找当前矩阵位置的上下左右
        const batch = find(row - 1, col, i + 1)
            || find(row + 1, col, i + 1)
            || find(row, col - 1, i + 1)
            || find(row, col + 1, i + 1)
        // 只要其中一条路径匹配就ok了
        if (batch) {
            return true
        }
        // 如果都不匹配，则重置used，以便开启一条新的路径进行搜索
        used[row][col] = false
        return false
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 矩阵的每一个位置作为起点和word进行匹配
            if (find(i, j, 0)) {
                return true
            }
        }
    }
    return false
};
// @lc code=end

