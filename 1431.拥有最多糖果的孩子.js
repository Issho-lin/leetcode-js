/*
 * @Author: linqibin
 * @Date: 2022-12-05 15:55:35
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 15:57:59
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = -Infinity
    for (const item of candies) {
        max = Math.max(max, item)
    }
    const res = []
    for (const item of candies) {
        if (item + extraCandies < max) {
            res.push(false)
        } else {
            res.push(true)
        }
    }
    return res
};
// @lc code=end

