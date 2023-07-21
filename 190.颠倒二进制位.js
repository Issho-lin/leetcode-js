/*
 * @Author: linqibin
 * @Date: 2022-10-26 09:53:27
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-26 10:22:44
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0
    for (let i = 0; i < 32; i++) {
        // res无符号左移一位，末位补0，加上n的最后一位
        res = (res << 1) + (n & 1)
        console.log(Number(res).toString(2));
        // n无符号右移一位
        n = n >> 1
    }
    return res >>> 0
};
// @lc code=end

