/*
 * @Author: linqibin
 * @Date: 2022-12-20 16:10:40
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-20 16:11:00
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2481 lang=javascript
 *
 * [2481] 分割圆的最少切割次数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function(n) {
    if (n === 1) {
        return 0
    }
    return n % 2 === 0 ?  n / 2 : n
};
// @lc code=end

