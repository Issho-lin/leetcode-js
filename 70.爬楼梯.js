/*
 * @Author: linqibin
 * @Date: 2022-10-17 15:47:47
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-17 16:11:14
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const stack = []
    for (let i = 1; i <= n; i++) {
        if (i < 3) {
            stack[i] = i
        } else {
            stack[i] = stack[i - 1] + stack[i - 2]
        }
    }
    return stack[n]
};
// @lc code=end

