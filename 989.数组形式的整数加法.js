/*
 * @Author: linqibin
 * @Date: 2022-11-24 11:34:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 11:49:26
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let decade = 0
    for (let i = num.length - 1; i >= 0; i--) {
        num[i] = num[i] + k % 10 + decade
        if (num[i] > 9) {
            num[i] %= 10
            decade = 1
        } else {
            decade = 0
        }
        k = k / 10 >> 0
    }
    while (k) {
        let n = k % 10 + decade
        if (n > 9) {
            n %= 10
            decade = 1
        } else {
            decade = 0
        }
        num.unshift(n)
        k = k / 10 >> 0
    }
    if (decade) {
        num.unshift(decade)
    }
    return num
};
// addToArrayForm([1,2,0,0], 34);
// @lc code=end

