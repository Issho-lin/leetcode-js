/*
 * @Author: linqibin
 * @Date: 2022-10-27 10:51:33
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-27 11:05:44
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = new Map()
    let str = ''
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) {
                return false
            }
        } else {
            if (str.includes(t[i])) {
                return false
            }
            map.set(s[i], t[i])
            str += t[i]
        }
    }
    return true
};
// @lc code=end

