/*
 * @Author: linqibin
 * @Date: 2023-02-10 15:18:40
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-10 15:21:59
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1913 lang=javascript
 *
 * [1913] 两个数对之间的最大乘积差
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let max1 = -Infinity, max2 = -Infinity
    let min1 = Infinity, min2 = Infinity
    for (const num of nums) {
        if (num > max1) {
            max2 = max1
            max1 = num
        } else if (num > max2) {
            max2 = num
        }
        if (num < min1) {
            min2 = min1
            min1 = num
        } else if (num < min2) {
            min2 = num
        }
    }
    return (max1 * max2) - (min1 * min2)
};
// @lc code=end

