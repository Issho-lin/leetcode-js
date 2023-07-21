/*
 * @Author: linqibin
 * @Date: 2022-11-22 16:14:36
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 16:24:00
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    const [a1, b1, a2, b2] = rec1
    const [x1, y1, x2, y2] = rec2
    // rec2左下角大于rec1右上角，或rec2右上角小于rec1左下角
    if (x1 >= a2 || y1 >= b2) {
        return false
    }
    if (x2 <= a1 || y2 <= b1) {
        return false
    }
    return true
};
// @lc code=end

