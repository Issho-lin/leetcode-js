/*
 * @Author: linqibin
 * @Date: 2022-11-29 11:38:50
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 11:39:31
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1108 lang=javascript
 *
 * [1108] IP 地址无效化
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let res = ''
    for (const char of address) {
        if (char === '.') {
            res += '[.]'
        } else {
            res += char
        }
    }
    return res
};
// @lc code=end

