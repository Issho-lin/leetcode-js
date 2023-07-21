/*
 * @Author: linqibin
 * @Date: 2023-02-02 15:19:48
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-02 15:43:33
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1827 lang=javascript
 *
 * [1827] 最少操作使数组递增
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    if (nums.length < 2) {
        return 0
    }
    let cnt = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            cnt += nums[i - 1] + 1 - nums[i]
            nums[i] = nums[i - 1] + 1
        }
    }
    return cnt
};

// minOperations([4881,2593,6819,9256,4135])
// @lc code=end

