/*
 * @Author: linqibin
 * @Date: 2022-11-18 09:52:43
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 10:02:49
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], {
                count: 1,
                first: i,
                last: i
            })
        } else {
            const { count, first } = map.get(nums[i])
            map.set(nums[i], {
                count: count + 1,
                first,
                last: i
            })
        }
    }
    let max = -Infinity, min = Infinity
    for (const { count } of map.values()) {
        max = Math.max(max, count)
    }
    for (const { count, first, last } of map.values()) {
        if (max === count) {
            min = Math.min(min, last - first + 1)
        }
    }
    return min
};
// @lc code=end

