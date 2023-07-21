/*
 * @lc app=leetcode.cn id=1957 lang=javascript
 *
 * [1957] 删除字符使字符串变好
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let res = '', cnt = 1
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && s[i] === s[i - 1]) {
            cnt++
        } else {
            cnt = 1
        }
        if (cnt >= 3) {
            continue
        }
        res += s[i]
    }
    return res
};
// @lc code=end

