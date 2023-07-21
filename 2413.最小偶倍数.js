/*
 * @Author: linqibin
 * @Date: 2022-12-26 16:40:22
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-26 16:41:32
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2413 lang=javascript
 *
 * [2413] 最小偶倍数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    for (let i = 2; i <= 2 * n; i+=2) {
        if (i % 2 === 0 && i % n === 0) {
            return i
        }
    }
};
// @lc code=end

