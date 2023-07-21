/*
 * @Author: linqibin
 * @Date: 2022-10-27 10:37:15
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-27 14:18:54
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 3) {
        return 0
    }
    // const isPrimes = new Array(n).fill(1)
    // let count = 0
    // for (let i = 2; i < n; i++) {
    //     if (isPrimes[i]) {
    //         count++
    //         // 质数的倍数标记为合数
    //         for (let j = i * i; j < n; j+=i) {
    //             isPrimes[j] = 0
    //         }
    //     }
    // }
    // return count
    let count = 1
    for (let i = 3; i < n; i+=2) {
        count += isPrimes(i)
    }
    return count
};
var isPrimes = function(x) {
    if (x < 2) {
        return 0
    }
    for (let i = 2; i ** 2 <= x; i++) {
        if (x % i === 0) {
            return 0
        }
    }
    return 1
}
// @lc code=end

