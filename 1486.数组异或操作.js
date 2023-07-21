/*
 * @Author: linqibin
 * @Date: 2022-12-06 17:37:22
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-06 17:38:41
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1486 lang=javascript
 *
 * [1486] 数组异或操作
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    const nums = []
    for (let i = 0; i < n; i++) {
        nums[i] = start + 2 * i
    }
    return nums.reduce((a, b) => a ^ b)
};
// @lc code=end

