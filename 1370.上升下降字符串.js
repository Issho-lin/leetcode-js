/*
 * @Author: linqibin
 * @Date: 2022-12-05 10:04:51
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 10:17:39
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    // 从小到大，再从大到小
    const nums = new Array(26).fill(0)
    for (const char of s) {
        nums[char.charCodeAt() - 'a'.charCodeAt()]++
    }
    let ret = '', i = 0, sort = 'asc'
    while (ret.length < s.length) {
        if (nums[i] > 0) {
            ret += String.fromCharCode(i + 'a'.charCodeAt())
            nums[i]--
        }
        if (sort === 'asc') {
            i++
        } else {
            i--
        }
        if (i > 25) {
            sort = 'desc'
            i--
        }
        if (i < 0) {
            sort = 'asc'
            i++
        }
        
    }
    return ret
};
// @lc code=end

