/*
 * @Author: linqibin
 * @Date: 2022-12-05 16:51:13
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 16:54:25
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1502 lang=javascript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a - b)
    const diff = arr[1] - arr[0]
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return false
        }
    }
    return true
};
// @lc code=end

