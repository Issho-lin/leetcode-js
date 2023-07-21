/*
 * @Author: linqibin
 * @Date: 2022-11-08 18:50:44
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-09 08:37:37
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let sum = 0, line = 0
    while (sum < n) {
        sum += (++line)
    }
    return sum > n ? line - 1 : line
};

// arrangeCoins(5)
// @lc code=end

