/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    const points = new Array(primes.length).fill(0)
    let values = []
    const dp = [1]
    for (let i = 1; i < n; i++) {
        values = points.map((p, idx) => dp[p] * primes[idx])
        dp[i] = Math.min(...values)
        values.forEach((v, idx) => {
            if (dp[i] === v) {
                points[idx]++
            }
        })
    }
    return dp[n - 1]
};
// @lc code=end

