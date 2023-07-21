/*
 * @Author: linqibin
 * @Date: 2023-01-17 10:48:01
 * @LastEditors: linqibin
 * @LastEditTime: 2023-01-17 10:49:42
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0, cur = 0
    for (let i = 0; i < gain.length; i++) {
        cur += gain[i]
        max = Math.max(max, cur)
    }
    return max
};
// @lc code=end

