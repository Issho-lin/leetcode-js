/*
 * @lc app=leetcode.cn id=1945 lang=javascript
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let num = ''
    for (const char of s) {
        const n = char.charCodeAt() - 97 + 1
        num += n
    }
    let res
    while (k--) {
        res = 0
        for (let i = num.length - 1; i >= 0; i--) {
            res += (+num[i])
        }
        num = res + ''
    }
    return res
};

// getLucky('iiii', 1)
// @lc code=end

