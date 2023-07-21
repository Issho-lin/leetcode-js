/*
 * @Author: linqibin
 * @Date: 2022-10-31 09:57:33
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-31 10:23:41
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const stack = []
    let start = 0, end = 0
    while (end < nums.length) {
        while (nums[end] + 1 === nums[end + 1]) {
            end++
        }
        if (start === end) {
            stack.push(`${nums[end]}`)
        } else {
            stack.push(nums[start] + '->' + nums[end])
        }
        start = (++end)
    }
    return stack
};
// @lc code=end

