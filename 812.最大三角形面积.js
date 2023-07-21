/*
 * @Author: linqibin
 * @Date: 2022-11-21 15:05:34
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-21 16:33:32
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let max = -Infinity
    // 在二维空间中，叉乘还有另外一个几何意义就是：aXb等于由向量a和向量b构成的平行四边形的面积
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                // 以points[i]为原点，向points[j],points[k]建立两个向量a和b
                const [x0, y0] = points[i]
                const [x1, y1] = points[j]
                const [x2, y2] = points[k]
                // 向量a
                const [xa, ya] = [x1 - x0, y1 - y0]
                const [xb, yb] = [x2 - x0, y2 - y0]
                // 向量叉乘 / 2 求三角形面积
                const area = Math.abs(xa * yb - xb * ya)
                max = Math.max(max, area / 2)
            }
        }
    }
    return max
};
// @lc code=end

