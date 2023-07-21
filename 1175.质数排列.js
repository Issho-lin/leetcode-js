/*
 * @Author: linqibin
 * @Date: 2022-11-29 15:58:03
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 16:51:28
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    // 思路：求出1-n中，质数的个数
    let primeCount = 0
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
            primeCount++
        }
    }
    // 质数的排列方法（阶乘） * 剩余的非质数的排列方法（阶乘）
    let res = 1
    let m = n - primeCount
    while (primeCount) {
        res %= (10 ** 9 + 7)
        res *= primeCount
        primeCount--
    }
    while (m) {
        res %= (10 ** 9 + 7)
        res *= m
        m--
    }
    return res
};
var isPrime = function(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i <= (Math.sqrt(n) >> 0); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
// @lc code=end

