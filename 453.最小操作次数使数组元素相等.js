/*
 * @Author: linqibin
 * @Date: 2022-11-09 10:47:33
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-09 10:49:13
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let count = 0
    for (let i = nums.sort((a, b) => a - b).length - 1; i > 0; i--) {
        count += (nums[i] - nums[0])
    }
    return count
};
// @lc code=end

