/*
 * @Author: linqibin
 * @Date: 2022-11-01 08:34:23
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-14 11:06:49
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const q = [], ans = []
    for (let i = 0; i < nums.length; i++) {
        while (q.length && nums[i] > nums[q[q.length - 1]]) {
            q.pop()
        }
        q.push(i)
        if (i - q[0] >= k) {
            q.shift()
        }
        if (i >= k - 1) {
            ans.push(nums[q[0]])
        }
    }
    return ans
};
// @lc code=end

