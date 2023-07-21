/*
 * @Author: linqibin
 * @Date: 2022-10-10 15:44:23
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 15:02:10
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0, num = Math.abs(x), MAX = 2 ** 31 - 1, MIN = (-2) ** 31
    while (num) {
        res = res * 10 + num % 10
        num = num / 10 >> 0
    }
    return res > MAX || res < MIN ? 0 : x > 0 ? res : -res
};
// @lc code=end

