/*
 * @Author: linqibin
 * @Date: 2022-11-14 16:03:24
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-14 16:05:53
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const F = []
    for (let i = 0; i <= n; i++) {
        if (i < 2) {
            F[i] = i
        } else {
            F[i] = F[i - 1] + F[i - 2]
        }
    }
    return F[n]
};
// @lc code=end

