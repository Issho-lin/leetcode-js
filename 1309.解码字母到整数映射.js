/*
 * @Author: linqibin
 * @Date: 2022-12-02 18:00:40
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 08:31:16
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let str = '', num = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i + 2] === '#') {
            num = (+s[i]) * 10 + (+s[i + 1])
             str += String.fromCharCode(num + 96)
            num = 0
            i += 2
            continue
        }
        str += String.fromCharCode((+s[i]) + 96)
    }
    return str
};
// @lc code=end

