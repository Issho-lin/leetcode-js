/*
 * @Author: linqibin
 * @Date: 2022-12-20 17:30:43
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-20 17:40:01
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2460 lang=javascript
 *
 * [2460] 对数组执行操作
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    const n = nums.length
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2
            nums[i + 1] = 0
        }
    }
    let l = 0, r = 0
    while (r < n) {
        while (r < n - 1 && nums[r] === 0) {
            r++
        }
        nums[l] = nums[r]
        l++
        r++
    }
    for (let i = l; i < n; i++) {
        nums[i] = 0
    }
    return nums
};
// @lc code=end

