/*
 * @Author: linqibin
 * @Date: 2022-10-26 10:23:57
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-26 10:55:22
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
    for (let i = 0; i < 32; i++) {
        if (n & 1 === 1) {
            count++
        }
        console.log(n, '---', n & 1);
        n = n >> 1
    }
    return count
};
// @lc code=end

