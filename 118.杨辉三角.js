/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const stack = []
    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            stack.push([1])
        } else if (i === 1) {
            stack.push([1, 1])
        } else {
            let j = 0
            while (j <= i) {
                if (!stack[i]) {
                    stack.push([])
                }
                if (j === 0 || j === i) {
                    stack[i].push(1)
                } else {
                    const val = stack[i - 1][j - 1] + stack[i - 1][j]
                    stack[i].push(val)
                }
                j++
            }
        }
    }
    return stack
};
// @lc code=end

