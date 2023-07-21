/*
 * @Author: linqibin
 * @Date: 2023-01-17 11:14:18
 * @LastEditors: linqibin
 * @LastEditTime: 2023-01-17 11:16:19
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1748 lang=javascript
 *
 * [1748] 唯一元素的和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const map = new Map()
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    let sum = 0
    for (const [key, value] of map.entries()) {
        if (value === 1) {
            sum += key
        }
    }
    return sum
};
// @lc code=end

