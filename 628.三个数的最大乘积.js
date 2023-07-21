/*
 * @Author: linqibin
 * @Date: 2022-11-17 14:07:45
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-17 14:56:19
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    // 三个数的乘积为正，要么三个数都是正数，要么一个正数两个负数
    // 两个正数越大乘积越大，两个负数越小乘积越大
    // 所以三个数相乘的乘积最大，要么是最大的三个正数相乘，要么是一个最大的正数和两个最小的负数相乘
    // nums.sort((a, b) => b - a)
    // const [max1, max2, max3] = nums
    // const min1 = nums[nums.length - 1], min2 = nums[nums.length - 2]
    if (nums.length === 3) {
        return nums.reduce((a, b) => a * b)
    }
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity
    let min1 = Infinity, min2 = Infinity
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max1) {
            max3 = max2
            max2 = max1
            max1 = nums[i]
        } else if (nums[i] > max2) {
            max3 = max2
            max2 = nums[i]
        } else if (nums[i] > max3) {
            max3 = nums[i]
        }
        if (nums[i] < min1) {
            min2 = min1
            min1 = nums[i]
        } else if (nums[i] < min2) {
            min2 = nums[i]
        }
    }
    return Math.max(max1 * max2 * max3, max1 * min1 * min2)
};
// @lc code=end

