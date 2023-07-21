/*
 * @Author: linqibin
 * @Date: 2022-11-18 17:52:33
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 17:57:53
 * @Description:    
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const res = []
    for (let i = left; i <= right; i++) {
        if (i < 10 || isSelfDividingNumber(i)) {
            res.push(i)
        }
    }
    return res
};
var isSelfDividingNumber = function(num) {
    let tmp = num
    while (tmp) {
        if (num % (tmp % 10) !== 0) {
            return false
        }
        tmp = tmp / 10 >> 0
    }
    return true
}
// @lc code=end

