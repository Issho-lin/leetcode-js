/*
 * @Author: linqibin
 * @Date: 2022-11-22 15:39:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 15:50:12
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let count = 0, start = 0
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && s[i] !== s[i - 1]) {
            if (count >= 3) {
                stack.push([start, i - 1])
            }
            start = i
            count = 0
        }
        count++
        if (i === s.length - 1) {
            if (count >= 3) {
                stack.push([start, i])
            }
        }
    }
    return stack
};
// @lc code=end

