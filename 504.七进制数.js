/*
 * @Author: linqibin
 * @Date: 2022-11-14 15:00:55
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-14 15:10:22
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) {
        return '0'
    }
    const flag = num < 0 ? '-' : ''
    let res = ''
    num = Math.abs(num)
    while (num) {
        res = num % 7 + res
        num = num / 7 >> 0
    }
    return flag + res
};
// @lc code=end

