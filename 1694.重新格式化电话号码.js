/*
 * @Author: linqibin
 * @Date: 2023-01-16 16:32:56
 * @LastEditors: linqibin
 * @LastEditTime: 2023-01-16 16:47:32
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1694 lang=javascript
 *
 * [1694] 重新格式化电话号码
 */

// @lc code=start
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    let res = '', count = 0, total = 0
    for (const item of number) {
        if (/[0-9]/.test(item)) {
            total++
        }
    }
    for (let i = 0; i < number.length; i++) {
        if (total === 0) {
            return res
        }
        if (count === 3 || count === 2 && total === 2) {
            res += '-'
            count = 0
        }
        if (/[0-9]/.test(number[i])) {
            count++
            total--
            res += number[i]
        }
    }
    return res
};
// @lc code=end

