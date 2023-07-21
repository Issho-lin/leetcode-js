/*
 * @Author: linqibin
 * @Date: 2022-11-02 14:10:54
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-02 14:17:31
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0, right = num
    while (left <= right) {
        const mid = (left + right) / 2 >> 0
        const p = mid ** 2, q = (mid + 1) ** 2
        if (p < num && q > num) {
            return false
        }
        if (p > num) {
            right = mid - 1
        } else if (p < num) {
            left = mid + 1
        } else {
            return true
        }
    }
};
// @lc code=end

