/*
 * @Author: linqibin
 * @Date: 2022-11-14 16:42:16
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-16 08:50:06
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=521 lang=javascript
 *
 * [521] 最长特殊序列 Ⅰ
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if (a === b) {
        return -1
    }
    return Math.max(a.length, b.length)
};
// @lc code=end

