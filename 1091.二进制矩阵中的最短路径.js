/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const m = grid.length - 1
    const n = grid[0].length - 1
    if (grid[0][0] === 1 || grid[m][n] === 1) {
        return -1
    }
    if (m === 0 && n === 0 && grid[m][n] === 0) {
        return 1
    }
    const queue = [[0, 0]]
    let level = 1
    const dir = [
        [1, 1],
        [1, 0],
        [1, -1],
        [0, 1],
        [-1, 1],
        [0, -1],
        [-1, 0],
        [-1, -1]
    ]
    while (queue.length) {
        let len = queue.length
        while (len--) {
            const [x, y] = queue.shift()
            for (let i = 0; i < dir.length; i++) {
                const newX = x + dir[i][0]
                const newY = y + dir[i][1]

                if (
                    newX < 0 ||
                    newY < 0 ||
                    newX > m ||
                    newY > n ||
                    grid[newX][newY] === 1
                ) {
                    continue
                }
                if (newX === m && newY === n) {
                    return level + 1
                }
                grid[newX][newY] = 1
                queue.push([newX, newY])
            }
        }
        level++
    }
    return -1
};
// @lc code=end

