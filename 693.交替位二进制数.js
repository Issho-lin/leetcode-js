/*
 * @Author: linqibin
 * @Date: 2022-11-18 09:15:41
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 09:18:52
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const binary = n.toString(2)
    for (let i = 1; i < binary.length; i++) {
        if (binary[i] === binary[i - 1]) {
            return false
        }
    }
    return true
};
// @lc code=end

