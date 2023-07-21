/*
 * @Author: linqibin
 * @Date: 2022-11-01 09:23:55
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-01 10:05:36
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = [1]
    let p2 = 0, p3 = 0, p5 = 0
    for (let i = 1; i < n; i++) {
        const v2 = dp[p2] * 2
        const v3 = dp[p3] * 3
        const v5 = dp[p5] * 5
        dp[i] = Math.min(v2, v3, v5)
        if (dp[i] === v2) p2++
        if (dp[i] === v3) p3++
        if (dp[i] === v5) p5++
    }
    return dp[n - 1]
};
// @lc code=end

