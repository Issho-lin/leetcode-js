/*
 * @Author: linqibin
 * @Date: 2022-11-29 14:47:57
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 14:53:04
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const ans = []
    for (let i = 0; i <= n; i++) {
        if (i < 2) {
            ans[i] = i
        } else if (i === 2) {
            ans[i] = 1
        } else {
            ans[i] = ans[i - 3] + ans[i - 2] + ans[i - 1]
        }
    }
    return ans[n]
};
// @lc code=end

