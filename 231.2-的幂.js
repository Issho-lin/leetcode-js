/*
 * @Author: linqibin
 * @Date: 2022-10-31 10:42:12
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-31 10:42:59
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 0) {
        return false
    }
    while (n !== 1 && n % 2 === 0) {
        n /= 2
    }
    return n === 1
};
// @lc code=end

