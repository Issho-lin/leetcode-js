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
    const m = mat.length
    if (!m) {
        return
    }
    const n = mat[0].length
    const ans = new Array(m)
    for (let i = 0; i < m; i++) {
        ans[i] = new Array(n).fill(-1)        
    }
    const queue = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                ans[i][j] = 0
                queue.push([i, j])
            }
        }
    }
    let dist = 0
    while (queue.length) {
        let len = queue.length
        dist++
        while (len--) {
            const top = queue.shift()
            if (top[0] - 1 >= 0 && ans[top[0] - 1][top[1]] === -1) {
                ans[top[0] - 1][top[1]] = dist
                queue.push([top[0] - 1, top[1]])
            }
            if (top[0] + 1 < m && ans[top[0] + 1][top[1]] === -1) {
                ans[top[0] + 1][top[1]] = dist
                queue.push([top[0] + 1, top[1]])
            }
            if (top[1] - 1 >= 0 && ans[top[0]][top[1] - 1] === -1) {
                ans[top[0]][top[1] - 1] = dist
                queue.push([top[0], top[1] - 1])
            }
            if (top[1] + 1 < n && ans[top[0]][top[1] + 1] === -1) {
                ans[top[0]][top[1] + 1] = dist
                queue.push([top[0], top[1] + 1])
            }
        }
    }
    return ans
};
// @lc code=end

