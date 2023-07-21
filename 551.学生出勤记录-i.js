/*
 * @Author: linqibin
 * @Date: 2022-11-16 10:01:34
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-16 10:05:50
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let ACount = 0, LCount = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            ACount++
            if (ACount === 2) {
                return false
            }
        } else if (s[i] === 'L') {
            if (i === 0 || s[i - 1] !== 'L') {
                LCount = 1
            } else {
                LCount++
            }
            if (LCount === 3) {
                return false
            }
        }
    }
    return true
};
// @lc code=end

