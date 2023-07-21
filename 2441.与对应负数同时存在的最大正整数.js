/*
 * @Author: linqibin
 * @Date: 2022-12-23 09:24:34
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-23 09:28:30
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2441 lang=javascript
 *
 * [2441] 与对应负数同时存在的最大正整数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a, b) => a - b)
    let left = 0, right = nums.length - 1
    while (left < right) {
        if (nums[left] + nums[right] === 0) {
            return nums[right]
        }
        if (nums[left] + nums[right] > 0) {
            right--
        } else {
            left++
        }
    }
    return -1
};
// @lc code=end

