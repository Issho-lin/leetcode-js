/*
 * @Author: linqibin
 * @Date: 2022-11-18 16:21:50
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 17:14:49
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left = 0
    let right = nums.reduce((a, b) => a + b)
    for (let i = 0; i < nums.length; i++) {
        right -= nums[i]
        if (left === right) {
            return i
        }
        left += nums[i]
    }
    return -1
};
// @lc code=end

