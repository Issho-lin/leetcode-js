/*
 * @Author: linqibin
 * @Date: 2022-12-05 14:09:12
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 14:11:53
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a, b) => b - a)
    const all = nums.reduce((a, b) => a + b)
    const ret = []
    let sum = 0
    for (const item of nums) {
        ret.push(item)
        sum += item
        if (sum > all / 2) {
            return ret
        }
    }
};
// @lc code=end

