/*
 * @Author: linqibin
 * @Date: 2022-12-05 15:12:00
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 15:21:20
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1437 lang=javascript
 *
 * [1437] 是否所有 1 都至少相隔 k 个元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let start = -1, end = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            start = end
            end = i
            if (start >= 0 && end >= 0) {
                // 间隔k个元素，首尾应相差k + 1
                if (end - start < k + 1) {
                    return false
                }
            }
        }
    }
    return true
};

// kLengthApart([1,0,0,1,0,1], 2)
// @lc code=end

