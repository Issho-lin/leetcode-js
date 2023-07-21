/*
 * @Author: linqibin
 * @Date: 2022-12-15 15:51:05
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-15 17:02:04
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a, b) => b - a)
    let x = 0
    for (const num of nums) {
        if (num >= x) {
            if (x + 1 > num) {
                return -1
            }
            x++
        }
    }
    return x > 0 ? x : -1
};
// @lc code=end

