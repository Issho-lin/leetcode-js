/*
 * @Author: linqibin
 * @Date: 2022-10-25 09:46:05
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-25 10:10:15
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((x, y) => {
        let sx = 10, sy = 10
        while (sx <= x) {
            sx *= 10
        }
        while (sy <= y) {
            sy *= 10
        }
        return (y * sx + x) - (x * sy + y)
    })
    if (nums[0] === 0) {
        return '0'
    }
    return nums.join('')
};
// @lc code=end

