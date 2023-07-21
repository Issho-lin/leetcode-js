/*
 * @Author: linqibin
 * @Date: 2022-11-16 08:54:58
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-16 09:24:50
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let count = 0, str = '', rStr = ''
    for (let i = 0; i < s.length; i++) {
        count++
        if (count > k && count <= 2 * k) {
            if (count === 2 * k) {
                count = 0
            }
            str += s[i]
            continue
        }
        rStr = s[i] + rStr
        if (count === k || count < k && i === s.length - 1) {
            str += rStr
            rStr = ''
        }
        
    }
    return str
};
// @lc code=end

