/*
 * @lc app=leetcode.cn id=1652 lang=javascript
 *
 * [1652] 拆炸弹
 */

// @lc code=start
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    for (let i = 1; i < code.length; i++) {
        code[i] += code[i - 1]
    }
    const ret = [], n = code.length
    for (let i = 0; i < n; i++) {
        if (k > 0) {
            if (i + k < n) {
                ret[i] = code[i + k] - code[i]
            } else {
                ret[i] = (code[n - 1] - code[i]) + code[(i + k) % n]
            }
        } else if (k < 0) {
            if (i + k - 1 >= 0) {
                ret[i] = code[i - 1] - code[i + k - 1]
            } else if (i - 1 >= 0) {
                ret[i] = code[i - 1] + (code[n - 1] - code[i + k - 1 + n])
            } else {
                ret[i] = code[n - 1] - code[i + k - 1 + n]
            }
        } else {
            ret[i] = 0
        }
    }
    return ret
};

// decrypt([2,4,9,3], -2)
// @lc code=end

