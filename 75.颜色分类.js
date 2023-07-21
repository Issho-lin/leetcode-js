/*
 * @Author: linqibin
 * @Date: 2022-10-17 16:34:01
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-17 16:51:51
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const swap = (i, j) => {
        if (i === j) {
            return
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    let red = 0, blue = nums.length - 1
    for (let i = 0; i <= blue; i++) {
        if (nums[i] === 0) {
            swap(red++, i)
        } else if (nums[i] === 2) {
            swap(blue--, i--)
        }
    }
};
// @lc code=end

