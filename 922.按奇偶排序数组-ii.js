/*
 * @Author: linqibin
 * @Date: 2022-11-23 11:18:11
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-23 11:35:40
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0 && nums[i] % 2 === 0) {
            continue
        }
        if (i % 2 !== 0 && nums[i] % 2 !== 0) {
            continue
        }
        for (let j = i + 1; j < nums.length; j++) {
            // 一奇一偶，则互换
            if ((nums[i] + nums[j]) % 2 !== 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                break
            }
        }
    }
    return nums
};
// @lc code=end

