/*
 * @Author: linqibin
 * @Date: 2023-02-02 16:41:33
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-02 16:42:11
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1837 lang=javascript
 *
 * [1837] K 进制表示下的各位数字总和
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let sum = 0
    while (n) {
        sum += n % k
        n = n / k >> 0
    }
    return sum
};
// @lc code=end

