/*
 * @Author: linqibin
 * @Date: 2022-12-26 17:32:36
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-26 17:37:25
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2404 lang=javascript
 *
 * [2404] 出现最频繁的偶数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const map = new Map()
    for (const num of nums) {
        if (num % 2 === 0) {
            map.set(num, (map.get(num) || 0) + 1)
        }
    }
    let max = -1, maxKey = -1
    for (const [key, value] of map.entries()) {
        if (value > max || value === max && key < maxKey) {
            max = value
            maxKey = key
        }
    }
    return maxKey
};
// @lc code=end

