/*
 * @Author: linqibin
 * @Date: 2022-11-17 08:30:36
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-17 08:57:35
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let zeroCount = 0, start = false, count = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            zeroCount++
        } else {
            if (!start) {
                // 不以1开头：[0, 0, 0, 1]
                count += zeroCount / 2 >> 0
                start = true
            } else {
                // 以1开头，以1结尾：[1,0, 0, 0, 1]
                count += (zeroCount - 1) / 2 >> 0
            }
            zeroCount = 0
        }
        if (i === flowerbed.length - 1 && flowerbed[i] === 0) {
            if (!start) {
                // 不以1开头，不以1结尾：[0, 0, 0]
                count += (zeroCount + 1) / 2 >> 0
            } else {
                // 不以1结尾：[1,0, 0, 0]
                count += zeroCount / 2 >> 0
            }
            
        }
        
    }
    return count >= n
};
// @lc code=end

