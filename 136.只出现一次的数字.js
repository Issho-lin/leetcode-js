/*
 * @Author: linqibin
 * @Date: 2022-10-21 09:07:59
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-21 09:20:48
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 异或，两两相等异或为0，x与0异或为x
    return nums.reduce((prev, cur) => prev ^ cur, 0)
};
// @lc code=end

