/*
 * @Author: linqibin
 * @Date: 2022-12-02 17:28:36
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-02 17:30:42
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1, sum = 0
    while (n) {
        const digit = n % 10
        product *= digit
        sum += digit
        n = n / 10 >> 0
    }
    return product - sum
};
// @lc code=end

