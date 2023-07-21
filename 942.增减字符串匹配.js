/*
 * @Author: linqibin
 * @Date: 2022-11-24 09:28:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 09:32:10
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const res = [], store = new Array(s.length + 1).fill(0).map((_, idx) => idx)
    for (const char of s) {
        if (char === 'I') {
            // 递增，从现有store里取最小值
            res.push(store.shift())
        } else {
            // 递减，从现有store里取最大值
            res.push(store.pop())
        }
    }
    res.push(store[0])
    return res
};
// @lc code=end

