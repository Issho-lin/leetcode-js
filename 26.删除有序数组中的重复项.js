/*
 * @Author: linqibin
 * @Date: 2022-10-12 09:36:16
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 17:18:52
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        nums[k++] = nums[i]
    }
    return nums.length = k
};
// @lc code=end
