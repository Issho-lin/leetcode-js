/*
 * @Author: linqibin
 * @Date: 2022-10-13 10:57:03
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 17:57:39
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1
    }
    if (n < 0) {
        n = -n
        x = 1/x
    }
    let cache = 1
    while (true) {
        if (n === 1) {
            return cache * x
        }
        if (n % 2 !== 0) {
            cache *= x
        }
        x *= x
        n = n  / 2 >> 0
    }
};
// @lc code=end

