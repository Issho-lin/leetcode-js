/*
 * @Author: linqibin
 * @Date: 2022-11-24 09:35:22
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 09:47:13
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    // 三角形构成条件：任意两条较小边的和大于第三边
    nums.sort((a, b) => b - a)
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2]
        }
    }
    return 0
};
// @lc code=end

