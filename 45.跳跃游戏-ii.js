/*
 * @Author: linqibin
 * @Date: 2022-10-13 08:43:03
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 17:48:54
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let startIdx = 0, endIdx = 0, steps = 0
    for (let i = 0; i < nums.length - 1; i++) {
        endIdx = Math.max(endIdx, nums[i] + i)
        if (i === startIdx) {
            steps++
            startIdx = endIdx
        }
    }
    return steps
};
// @lc code=end

