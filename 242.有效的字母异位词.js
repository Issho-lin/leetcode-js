/*
 * @Author: linqibin
 * @Date: 2022-10-31 14:38:11
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-31 14:42:45
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) {
            return false
        }
        let sum = map.get(t[i])
        if (sum - 1 === 0) {
            map.delete(t[i])
        } else {
            map.set(t[i], sum - 1)
        }
    }
    return !map.size
};
// @lc code=end

