/*
 * @Author: linqibin
 * @Date: 2022-10-18 09:00:42
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-18 09:12:05
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let last = m + n
    while (n > 0) {
        nums1[m - 1] > nums2[n - 1] ? nums1[--last] = nums1[--m] : nums1[--last] = nums2[--n]
    }
};
// @lc code=end

