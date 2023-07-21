/*
 * @Author: linqibin
 * @Date: 2022-10-10 14:53:43
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-15 16:03:04
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map.has(num)) {
            return [map.get(num), i]
        } else {
            map.set(target - num, i)
        }
    }
};
// @lc code=end

