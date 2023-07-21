/*
 * @Author: linqibin
 * @Date: 2022-11-21 11:03:10
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-21 11:09:25
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const m = image.length, n = image[0].length
    const target = image[sr][sc]

    if (target === color) {
        return image
    }

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return
        }
        if (image[i][j] === target) {
            image[i][j] = color
            dfs(i - 1, j)
            dfs(i + 1, j)
            dfs(i, j - 1)
            dfs(i, j + 1)
        }
    }
    dfs(sr, sc)
    return image
};
// @lc code=end

