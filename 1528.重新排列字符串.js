/*
 * @Author: linqibin
 * @Date: 2022-12-06 18:35:00
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-06 18:39:17
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1528 lang=javascript
 *
 * [1528] 重新排列字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const map = new Map()
    for (let i = 0; i < indices.length; i++) {
        map.set(indices[i], i)
    }
    let res = ''
    for (let i = 0; i < s.length; i++) {
        res += s[map.get(i)]
    }
    return res
};
// @lc code=end

