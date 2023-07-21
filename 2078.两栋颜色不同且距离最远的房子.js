/*
 * @Author: linqibin
 * @Date: 2023-02-20 16:16:44
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-20 16:26:16
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2078 lang=javascript
 *
 * [2078] 两栋颜色不同且距离最远的房子
 */

// @lc code=start
/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let max = 0
    for (let left = 0; left < colors.length; left++) {
        for (let right = colors.length - 1; right > left; right--) {
            if (colors[left] !== colors[right]) {
                max = Math.max(max, right - left)
                break
            }
        }
    }
    return max
};

// @lc code=end

