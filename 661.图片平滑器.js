/*
 * @Author: linqibin
 * @Date: 2022-11-17 17:42:32
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-17 18:43:45
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const m = img.length, n = img[0].length
    var findCircum = function(i, j) {
        let sum = img[i][j], count = 1
        if (i - 1 >= 0) {
            sum += img[i - 1][j]
            count++
        }
        if (i + 1 < m) {
            sum += img[i + 1][j]
            count++
        }
        if (j - 1 >= 0) {
            sum += img[i][j - 1]
            count++
        }
        if (j + 1 < n) {
            sum += img[i][j + 1]
            count++
        }
        if (i - 1 >= 0 && j - 1 >= 0) {
            sum += img[i - 1][j - 1]
            count++
        }
        if (i - 1 >= 0 && j + 1 < n) {
            sum += img[i - 1][j + 1]
            count++
        }
        if (i + 1 < m && j - 1 >= 0) {
            sum += img[i + 1][j - 1]
            count++
        }
        if (i + 1 < m && j + 1 < n) {
            sum += img[i + 1][j + 1]
            count++
        }
        return sum / count >> 0
    }
    const grid = new Array(m).fill(0).map(() => [...new Array(n).fill(0)])
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = findCircum(i, j)
        }
    }
    return grid
};

// @lc code=end

