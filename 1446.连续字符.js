/*
 * @Author: linqibin
 * @Date: 2022-12-05 15:08:39
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 15:10:41
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let cnt = 1, max = -Infinity
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i - 1]) {
            max = Math.max(max, cnt)
            cnt = 1
        } else {
            cnt++
        }
    }
    return Math.max(max, cnt)
};
// @lc code=end

