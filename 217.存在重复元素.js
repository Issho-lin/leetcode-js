/*
 * @Author: linqibin
 * @Date: 2022-10-28 16:46:12
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-28 16:47:41
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return [...new Set(nums)].length !== nums.length
};
// @lc code=end

