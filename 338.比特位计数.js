/*
 * @Author: linqibin
 * @Date: 2022-11-15 15:46:28
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-15 15:58:03
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    const ans = []
    for (let i = 0; i <= n; i++) {
        let count = 0, num = i
        while(num) {
            num &= (num - 1)
            count++
        }
        ans[i] = count
    }
    return ans
};
// @lc code=end

