/*
 * @Author: linqibin
 * @Date: 2022-11-18 08:45:25
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 08:49:01
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let max = 1, count = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            count++
        } else {
            max = Math.max(max, count)
            count = 1
        }
    }
    return Math.max(max, count)
};
// @lc code=end

