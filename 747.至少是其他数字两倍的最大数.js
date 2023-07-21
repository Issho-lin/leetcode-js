/*
 * @Author: linqibin
 * @Date: 2022-11-18 17:16:43
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 17:19:19
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max1 = -Infinity, max2 = -Infinity, idx = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max1) {
            max2 = max1
            max1 = nums[i]
            idx = i
        } else if (nums[i] > max2 && nums[i] !== max1) {
            max2 = nums[i]
        }
    }
    return max1 / max2 >= 2 ? idx : -1
};
// @lc code=end

