/*
 * @Author: linqibin
 * @Date: 2022-10-25 08:37:12
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-25 09:22:31
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let num = columnNumber, res = ''
    while (num) {
        let rem = num % 26
        num = num / 26 >> 0
        if (rem === 0) {
            rem = 26
            num--
        }
        res = String.fromCharCode(64 + rem) + res
    }
    return res
};
// @lc code=end

