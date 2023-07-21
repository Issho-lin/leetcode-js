/*
 * @Author: linqibin
 * @Date: 2022-11-02 08:53:35
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-02 09:36:27
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
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
    const dp = [1], p = new Array(primes.length).fill(0)
    for (let i = 1; i < n; i++) {
        const vp = primes.map((v, i) => dp[p[i]] * v)
        const min = Math.min(...vp)
        dp[i] = min
        for (let j = 0; j < vp.length; j++) {
            if (vp[j] === min) {
                p[j]++
            }
        }
    }
    return dp[n - 1]
};

// @lc code=end

