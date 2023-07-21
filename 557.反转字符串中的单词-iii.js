/*
 * @Author: linqibin
 * @Date: 2022-11-16 10:10:07
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-16 10:13:44
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = '', rStr = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            str += (rStr + s[i])
            rStr = ''
            continue
        }
        rStr = s[i] + rStr
    }
    return str + rStr
};
// @lc code=end

