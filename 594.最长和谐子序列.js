/*
 * @Author: linqibin
 * @Date: 2022-11-16 17:13:56
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-16 18:37:42
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    // nums为整数数组，子序列要满足最大值和最小值之间的差别正好是 1 ，即子序列只能由 x 和 x + 1组成
    // 要让子序列最长，就要找到 x 和 x + 1 的所有个数
    const map = new Map()
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    let max = 0
    for (const key of map.keys()) {
        if (!map.has(key + 1)) {
            continue
        }
        max = Math.max(max, map.get(key) + map.get(key + 1))
    }
    return max
};
// @lc code=end

