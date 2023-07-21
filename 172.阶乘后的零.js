/*
 * @Author: linqibin
 * @Date: 2022-10-25 09:39:34
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-25 09:45:34
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let res = 0
    while (n >= 5) {
        n = n / 5 >> 0
        res += n
    }
    return res
};
// @lc code=end

