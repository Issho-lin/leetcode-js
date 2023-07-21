/*
 * @Author: linqibin
 * @Date: 2022-11-23 11:06:32
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-23 11:16:53
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let max = -Infinity, min = Infinity
    for (const num of nums) {
        max = Math.max(max, num)
        min = Math.min(min, num)
    }
    // 让最大值和最小值尽可能接近
    max -= k
    min += k
    // 如果max,min之间的距离可以达到小于等于0，说明分数为0
    // 如果max,min之间的距离达到极限仍然大于0，说明分数最小只能等于这个距离
    return max - min <= 0 ? 0 : max - min
};
// @lc code=end

