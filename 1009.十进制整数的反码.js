/*
 * @Author: linqibin
 * @Date: 2022-11-25 11:52:52
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-25 11:58:03
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1009 lang=javascript
 *
 * [1009] 十进制整数的反码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let res = ''
    for (const b of n.toString(2)) {
        if (b === '1') {
            res += '0'
        } else {
            res += '1'
        }
    }
    return parseInt(res, 2)
};
// @lc code=end

