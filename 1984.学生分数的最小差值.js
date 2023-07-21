/*
 * @Author: linqibin
 * @Date: 2023-02-13 14:49:31
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-13 15:00:34
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1984 lang=javascript
 *
 * [1984] 学生分数的最小差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if (k === 1) {
        return 0
    }
    nums.sort((a, b) => a - b)
    let min = Infinity
    for (let i = k - 1; i < nums.length; i++) {
        min = Math.min(min, nums[i] - nums[i - k + 1])
    }
    return min
};

// minimumDifference([9,4,1,7], 2)
// @lc code=end

