/*
 * @lc app=leetcode.cn id=1816 lang=javascript
 *
 * [1816] 截断句子
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let str = '', idx = 0
    while (k && idx < s.length) {
        if (s[idx] === ' ' && !--k) {
            break
        }
        str += s[idx++]
    }
    return str
};
// @lc code=end

