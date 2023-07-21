/*
 * @Author: linqibin
 * @Date: 2022-10-12 09:48:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 17:20:35
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            continue
        }
        nums[k++] = nums[i]
    }
    return nums.length = k
};
// @lc code=end

