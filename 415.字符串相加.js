/*
 * @Author: linqibin
 * @Date: 2022-11-08 17:58:25
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-08 18:42:41
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let decade = 0
    const len1 = num1.length, len2 = num2.length
    const length = Math.max(len1, len2)
    num1 = num1.padStart(length, '0')
    num2 = num2.padStart(length, '0')
    let res = ''
    for (let i = length - 1; i >= 0; i--) {
        const sum = (+num1[i]) + (+num2[i]) + decade
        res = sum % 10 + res
        decade = sum > 9 ? 1 : 0
    }
    return decade > 0 ? decade + res : res
};

// @lc code=end

