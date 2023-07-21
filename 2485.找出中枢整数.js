/*
 * @Author: linqibin
 * @Date: 2022-12-20 15:51:58
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-20 16:04:01
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2485 lang=javascript
 *
 * [2485] 找出中枢整数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    // (1 + x) * x = (x + n) * (n - x + 1)
    // (n ** 2 + n) = 2 * x ** 2
    const ret = n ** 2 + n
    let left = 1, right = n
    while (left <= right) {
        const mid = (left + right) / 2 >> 0
        const tmp = 2 * mid ** 2
        if (tmp === ret) {
            return mid
        }
        if (tmp > ret) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
};
// @lc code=end

