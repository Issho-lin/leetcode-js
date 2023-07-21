/*
 * @Author: linqibin
 * @Date: 2022-11-25 09:59:02
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-25 10:02:48
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    // 每次选最小的就可以
    while (k--) {
        const min = [-1, Infinity]
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < min[1]) {
                min[0] = i
                min[1] = nums[i]
            }
        }
        nums[min[0]] = -nums[min[0]]
    }
    return nums.reduce((a, b) => a + b)
};
// @lc code=end

