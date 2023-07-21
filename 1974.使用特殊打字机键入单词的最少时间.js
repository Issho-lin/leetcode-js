/*
 * @Author: linqibin
 * @Date: 2023-02-10 16:57:44
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-10 17:08:21
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1974 lang=javascript
 *
 * [1974] 使用特殊打字机键入单词的最少时间
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    // 顺时针： b - a
    // 逆时针： 26 - (b - a)
    let sec = 0, cur = 0
    for (const letter of word) {
        const next = letter.charCodeAt() - 97
        const clockwise = Math.abs(next - cur)
        const anticlockwise = 26 - clockwise
        sec += Math.min(clockwise, anticlockwise)
        cur = next
    }
    return sec + word.length
};

// minTimeToType("bza")
// @lc code=end

