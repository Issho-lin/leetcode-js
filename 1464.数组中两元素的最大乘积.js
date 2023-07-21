/*
 * @Author: linqibin
 * @Date: 2022-12-05 14:49:23
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 14:53:47
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1464 lang=javascript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max1 = -Infinity, max2 = -Infinity
    let min1 = Infinity, min2 = Infinity
    for (const num of nums) {
        if (max1 < num) {
            max2 = max1
            max1 = num
        } else if (max2 < num) {
            max2 = num
        }
        if (min1 > num) {
            min2 = min1
            min1 = num
        } else if (min2 > num) {
            min2 = num
        }
    }
    return Math.max((max1 - 1) * (max2 - 1), (min1 - 1) * (min2 - 1))
};
// @lc code=end

