/*
 * @Author: linqibin
 * @Date: 2022-11-15 17:35:27
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-15 18:01:27
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let str = '', count = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '-') {
            continue
        }
        str = s[i].toUpperCase() + str
        count++
        if (count === k) {
            count = 0
            str = '-' + str
        }
    }
    while (str.startsWith('-')) {
        str = str.slice(1)
    }
    return str
};
// @lc code=end

