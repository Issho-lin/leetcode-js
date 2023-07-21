/*
 * @Author: linqibin
 * @Date: 2022-10-12 10:02:38
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 17:28:21
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    if (nums[left] === target && nums[right] === target) {
      return [left, right]
    }
    if (nums[left] < target) {
      left++
    }
    if (nums[right] > target) {
      right--
    }
  }
  return [-1, -1]
};
// @lc code=end
