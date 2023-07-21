/*
 * @Author: linqibin
 * @Date: 2022-11-09 11:02:10
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-09 11:21:43
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    return s.repeat(2).indexOf(s, 1) !== s.length
};
// @lc code=end

