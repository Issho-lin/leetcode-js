/*
 * @Author: linqibin
 * @Date: 2022-11-23 10:56:46
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-23 11:02:07
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            continue
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] % 2 === 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    return nums
};
// @lc code=end

