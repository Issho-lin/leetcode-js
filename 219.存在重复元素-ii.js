/*
 * @Author: linqibin
 * @Date: 2022-10-28 16:49:01
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-28 16:59:08
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (i - map.get(nums[i]) <= k) {
                return true
            }
        }
        map.set(nums[i], i)
    }
    return false
};
// @lc code=end

