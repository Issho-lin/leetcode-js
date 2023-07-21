/*
 * @Author: linqibin
 * @Date: 2022-11-18 10:21:28
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 10:23:21
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = (left + right) >> 1
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
};
// @lc code=end

