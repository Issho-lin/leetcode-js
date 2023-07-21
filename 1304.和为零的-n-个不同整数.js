/*
 * @Author: linqibin
 * @Date: 2022-12-02 17:55:11
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-02 17:58:29
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1304 lang=javascript
 *
 * [1304] 和为零的 N 个不同整数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const arr = new Array(n).fill(0).map((_, idx) => idx + 1)
    const sum = arr.reduce((a, b) => a + b) - arr[arr.length - 1]
    arr[arr.length - 1] = -sum
    return arr
};
// @lc code=end

