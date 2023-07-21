/*
 * @Author: linqibin
 * @Date: 2022-11-29 10:21:11
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 10:47:10
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return ''
    }
    if (str1.length < str2.length) {
        [str1, str2] = [str2, str1]
    }
    const mod = strMod(str1, str2)
    return mod === '' ? str2 : gcdOfStrings(str2, mod)
};
var strMod = function(str1, str2) {
    while (str1.includes(str2)) {
        str1 = str1.replace(str2, '')
    }
    return str1
}
// @lc code=end

