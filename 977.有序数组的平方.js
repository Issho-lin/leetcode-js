/*
 * @Author: linqibin
 * @Date: 2022-11-24 11:30:48
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 11:31:28
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(item => item ** 2).sort((a, b) => a - b)
};
// @lc code=end

