/*
 * @Author: linqibin
 * @Date: 2023-02-20 16:30:19
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-20 16:31:31
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2089 lang=javascript
 *
 * [2089] 找出数组排序后的目标下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const idx = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            idx.push([i])
        }
    }
    return idx
};
// @lc code=end

