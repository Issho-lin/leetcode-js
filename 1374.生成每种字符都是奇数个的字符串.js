/*
 * @lc app=leetcode.cn id=1374 lang=javascript
 *
 * [1374] 生成每种字符都是奇数个的字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    // 偶数 = 奇数 + 1
    // 奇数 = 奇数 + 1 + 1
    if (n % 2 === 0) {
        return 'a'.repeat(n - 1) + 'b'
    }
    if (n === 1) {
        return 'a'
    }
    return 'a'.repeat(n - 2) + 'b' + 'c'
};
// @lc code=end

