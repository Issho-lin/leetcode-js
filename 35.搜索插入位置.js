/*
 * @Author: linqibin
 * @Date: 2022-10-12 10:29:35
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 17:34:06
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1
    while (left < right) {
        const mid = (left + right) >> 1
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    if (nums[left] >= target) {
        return left
    } else {
        return left + 1
    }
};
// @lc code=end

