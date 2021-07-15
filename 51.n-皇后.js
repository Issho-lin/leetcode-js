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
    const dfs = (row, tmp = []) => {
        if (row === n) {
            ret.push(tmp.map(ci => {
                const arr = new Array(n).fill('.')
                arr[ci] = 'Q'
                return arr.join('')
            }))
            return
        }
        for (let col = 0; col < n; col++) {
            const canNotSet = tmp.some((ci, ri) => {
                return (
                    ci === col ||
                    ci + ri === col + row ||
                    ci - ri === col - row
                )
            })            
            if (!canNotSet) {
                dfs(row + 1, [...tmp, col])
            }
        }
    }
    dfs(0)
    return ret
};
// @lc code=end

