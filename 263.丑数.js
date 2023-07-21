/*
 * @Author: linqibin
 * @Date: 2022-11-01 09:15:34
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-01 09:26:56
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n === 0) {
        return false
    }
    while (n % 2 === 0 || n % 3 === 0 || n % 5 === 0) {
        if (n % 2 === 0) {
            n /= 2
        }
        if (n % 3 === 0) {
            n /= 3
        }
        if (n % 5 === 0) {
            n /= 5
        }
    }
    return n === 1
};
// @lc code=end

