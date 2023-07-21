/*
 * @Author: linqibin
 * @Date: 2022-12-23 10:56:08
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-23 10:57:47
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2427 lang=javascript
 *
 * [2427] 公因子的数目
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let cnt = 0, min = Math.min(a, b)
    for (let i = 1; i <= min; i++) {
        if (a % i === 0 && b % i === 0) {
            cnt++
        }
    }
    return cnt
};
// @lc code=end

