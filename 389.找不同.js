/*
 * @Author: linqibin
 * @Date: 2022-11-03 11:57:16
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-03 14:33:50
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) {
            return t[i]
        }
        const v = map.get(t[i])
        if (v - 1 === 0) {
            map.delete(t[i])
        } else {
            map.set(t[i], v - 1)
        }
    }
};
// @lc code=end

