/*
 * @Author: linqibin
 * @Date: 2022-11-01 11:04:05
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-01 11:12:08
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index++] = nums[i]
        }
    }
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0
    }
};
// @lc code=end

