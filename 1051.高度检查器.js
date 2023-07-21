/*
 * @Author: linqibin
 * @Date: 2022-11-29 10:18:40
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 10:20:15
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const expected = [...heights]
    expected.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            count++
        }
    }
    return count
};
// @lc code=end

