/*
 * @Author: linqibin
 * @Date: 2022-12-16 11:44:19
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-16 11:48:38
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1688 lang=javascript
 *
 * [1688] 比赛中的配对次数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let cnt = 0
    while (n > 1) {
        const mod = n % 2, m = n / 2 >> 0
        n = m + mod
        cnt += m
    }
    return cnt
};
// @lc code=end

