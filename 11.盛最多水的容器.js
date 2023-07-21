/*
 * @Author: linqibin
 * @Date: 2022-10-10 17:47:11
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 15:16:33
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1, ans = 0
    while (left < right) {
        ans = Math.max(ans, Math.min(height[left], height[right]) * (right - left))
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return ans
};
// @lc code=end

