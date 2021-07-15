/*
 * @lc app=leetcode.cn id=1753 lang=javascript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
    // 从小到大排序
    [a, b, c] = [a, b, c].sort((a, b) => a - b)
    // 从最小堆和最大堆拿石子，直到最小堆为空或最大堆与中间堆数量一样
    let score = 0
    const cnt1 = Math.min(c - b, a)
    score += cnt1
    c -= cnt1
    a -= cnt1

    // 如果最小堆不为空，则最大堆和中间堆数量维持一样，即从最小堆和中间堆 以及 最小堆和最大堆中各同时拿走最小堆数量的一半
    if (a !== 0) {
        // 保证最小堆的一半有效
        if (a % 2 === 1) {
            a -= 1
        }
        c -= a / 2
        b -= a / 2
        score += a
    }

    // 如果最小堆已经为空，则中间堆数量少于或等于最大堆， 那么同时拿走最大堆和中间堆，直到中间堆为空即可
    score += b

    return score
};
// @lc code=end

