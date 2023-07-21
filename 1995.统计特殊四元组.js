/*
 * @Author: linqibin
 * @Date: 2023-02-13 15:01:51
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-13 15:34:40
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1995 lang=javascript
 *
 * [1995] 统计特殊四元组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    let total = 0
    const map = new Map()
    for (let c = nums.length - 2; c >= 2; c--) {
        map.set(nums[c + 1], (map.get(nums[c + 1]) || 0) + 1)
        for (let b = c - 1; b >= 1; b--) {
            for (let a = b - 1; a >= 0; a--) {
                const tmp = nums[a] + nums[b] + nums[c]
                if (map.has(tmp)) {
                    total += map.get(tmp)
                }
            }
        }
    }
    return total
};
// @lc code=end

