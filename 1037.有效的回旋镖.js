/*
 * @Author: linqibin
 * @Date: 2022-11-29 08:36:29
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 09:04:09
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1037 lang=javascript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    // 数学函数表达式：y = kx + b
    // 方案一：由前两个点求出 k和 b，再将第三个点代入，如果成立，则三点在同一直线上
    // 求k值涉及到除法，会有浮点数计算精度问题
    // 方案二：分别求点1和点2的斜率，再求点1和点3的斜率，如果三个点的斜率两两相等，那么三个点在同一直线上
    // 可以由除法转换为乘法，避免浮点数精度的问题
    let [[x1, y1], [x2, y2], [x3, y3]] = points
    // 如果x都相同，那么是垂直于x轴的直线，y都相同不影响求函数表达式，所以不做特殊处理
    if (x1 === x2 && x2 === x3) {
        return false
    }
    // 如果其中两个点相同
    if (x1 === x2 && y1 === y2) {
        return false
    }
    if (x1 === x3 && y1 === y3) {
        return false
    }
    if (x2 === x3 && y2 === y3) {
        return false
    }
    // 三个点各不相同
    // const k = (y1 - y2) / (x1 - x2)
    // const b = y1 - k * x1
    // console.log(`y = ${k}x + ${b}`);
    // return k * x3 + b !== y3
    // const k1 = (y1 - y2) / (x1 - x2)
    // const k2 = (y1 - y3) / (x1 - x3)
    return (y1 - y2) * (x1 - x3) !== (y1 - y3) * (x1 - x2)
};
// @lc code=end

