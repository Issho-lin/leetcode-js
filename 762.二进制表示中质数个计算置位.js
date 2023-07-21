/*
 * @Author: linqibin
 * @Date: 2022-11-21 11:32:15
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-21 11:57:50
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let count = 0
    while (left <= right) {
        if (isPrime(oneCount(left))) {
            count++
        }
        if (left === right) {
            break
        }
        if (isPrime(oneCount(right))) {
            count++
        }
        left++
        right--
    }
    return count
};
var isPrime = function(n) {
    if (n < 2) {
        return false
    }
    const sqrt = Math.sqrt(n) >> 0
    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
var oneCount = function(n) {
    const str = n.toString(2)
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') {
            count++
        }
    }
    return count
}
// countPrimeSetBits(10, 15)
// @lc code=end

