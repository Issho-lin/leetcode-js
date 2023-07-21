/*
 * @Author: linqibin
 * @Date: 2023-02-20 15:54:19
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-20 15:55:45
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2057 lang=javascript
 *
 * [2057] 值相等的最小索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    let idx = -1
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) {
            idx = i
            break
        }
    }
    return idx
};
// @lc code=end

