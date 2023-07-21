/*
 * @Author: linqibin
 * @Date: 2022-12-20 16:46:25
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-20 17:07:53
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2465 lang=javascript
 *
 * [2465] 不同的平均值数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    const set = new Set()
    while (nums.length) {
        let [max, maxIdx] = getMax(nums)
        let [min, minIdx] = getMin(nums)
        // 要保证先删除后面的，再删除前面的
        if (minIdx > maxIdx) {
            [minIdx, maxIdx] = [maxIdx, minIdx]
        }
        nums.splice(maxIdx, 1)
        nums.splice(minIdx, 1)
        set.add((min + max) / 2)
    }
    return set.size
};
var getMax = function(nums) {
    let max = -Infinity, idx = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
            idx = i
        }
    }
    return [max, idx]
}
var getMin = function(nums) {
    let min = Infinity, idx = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
            idx = i
        }
    }
    return [min, idx]
}

// @lc code=end

