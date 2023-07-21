/*
 * @Author: linqibin
 * @Date: 2022-11-16 14:37:46
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-16 14:41:21
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const uniqueType = [...new Set([...candyType])]
    const eatCount = candyType.length / 2
    return Math.min(uniqueType.length, eatCount)
};
// @lc code=end

