/*
 * @Author: linqibin
 * @Date: 2022-11-10 18:48:20
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-10 18:51:07
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0, max = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++
        }
        if (nums[i] !== 1 || i === nums.length - 1) {
            max = Math.max(max, count)
            count = 0
        }
    }
    return max
};
// @lc code=end

