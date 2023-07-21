/*
 * @Author: linqibin
 * @Date: 2022-11-09 10:21:23
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-09 10:41:22
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    const arr = [...map.entries()]
    arr.sort((a, b) => b[1] - a[1])
    let res = ''
    arr.forEach(([key, value]) => {
        res += key.repeat(value)
    })
    return res
};
// @lc code=end

