/*
 * @Author: linqibin
 * @Date: 2023-01-17 15:35:17
 * @LastEditors: linqibin
 * @LastEditTime: 2023-01-17 15:47:09
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1752 lang=javascript
 *
 * [1752] 检查数组是否经排序和轮转得到
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    // 当成环形数组来看，最多只能出现一次前一个元素比后一个元素大的情况
    let cnt = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            cnt++
        }
    }
    if (nums[nums.length - 1] > nums[0]) {
        cnt++
    }
    return cnt <= 1
};
// @lc code=end

