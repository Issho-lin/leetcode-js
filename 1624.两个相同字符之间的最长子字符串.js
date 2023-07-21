/*
 * @Author: linqibin
 * @Date: 2022-12-16 11:31:46
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-16 11:34:33
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1624 lang=javascript
 *
 * [1624] 两个相同字符之间的最长子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let end = s.length - 1, max = -1
    for (let i = 0; i < s.length; i++) {
        while (end > i && s[i] !== s[end]) {
            end--
        }
        if (end > i) {
            max = Math.max(max, end - i - 1)
        }
        end = s.length - 1
    }
    return max
};
// @lc code=end

