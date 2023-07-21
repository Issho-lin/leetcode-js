/*
 * @Author: linqibin
 * @Date: 2022-10-17 15:31:41
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-17 15:47:31
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x
    while (left <= right) {
        const mid = (left + right) / 2 >> 0
        const p = mid ** 2, q = (mid + 1) ** 2
        if (p <= x && q > x) {
            return mid
        }
        if (p < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
};
// @lc code=end

