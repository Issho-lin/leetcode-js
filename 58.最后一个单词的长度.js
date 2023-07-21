/*
 * @Author: linqibin
 * @Date: 2022-10-14 08:52:43
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-14 08:56:51
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let idx = s.length - 1
    while (s[idx] === ' ') {
        idx--
    }
    let res = 0
    while (idx >= 0 && s[idx] !== ' ') {
        res++
        idx--
    }
    return res
};
// @lc code=end

