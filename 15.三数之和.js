/*
 * @Author: linqibin
 * @Date: 2022-10-11 09:13:02
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 15:33:31
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const stack = []
    for (let i = 0; i < nums.sort((a, b) => a - b).length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            } else {
                stack.push([nums[i], nums[left++], nums[right--]])
                while (nums[left] === nums[left - 1]) {
                    left++
                }
                while (nums[right] === nums[right + 1]) {
                    right--
                }
            }
        }
    }
    return stack
};
// @lc code=end

