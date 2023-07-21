/*
 * @Author: linqibin
 * @Date: 2023-02-13 17:05:02
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-13 17:08:51
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2016 lang=javascript
 *
 * [2016] 增量元素之间的最大差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let res = -1
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                res = Math.max(res, nums[j] - nums[i])
            }
        }
    }
    return res
};
// @lc code=end

