/*
 * @Author: linqibin
 * @Date: 2023-02-02 16:44:14
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-02 16:46:19
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1848 lang=javascript
 *
 * [1848] 到目标元素的最小距离
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let min = Infinity
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            const tmp = Math.abs(i - start)
            if (tmp < min) {
                min = tmp
            }
        }
    }
    return min
};
// @lc code=end

