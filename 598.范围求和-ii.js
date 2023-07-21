/*
 * @Author: linqibin
 * @Date: 2022-11-16 18:34:38
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-16 18:40:43
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    // 每次操作都是左上角区域从（0, 0）到（a, b）的矩形，必定重叠，所以找最小的a乘最小的b就行
    let x = m, y = n
    for (let i = 0; i < ops.length; i++) {
        const [a, b] = ops[i]
        x = Math.min(x, a)
        y = Math.min(y, b)
    }
    return x * y
};
// @lc code=end

