/*
 * @Author: linqibin
 * @Date: 2022-11-03 11:40:15
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-03 11:49:09
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map()
    for (let i = 0; i < magazine.length; i++) {
        map.set(magazine[i], (map.get(magazine[i]) || 0) + 1)
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (!map.has(ransomNote[i])) {
            return false
        }
        const count = map.get(ransomNote[i])
        if (count < 2) {
            map.delete(ransomNote[i])
        } else {
            map.set(ransomNote[i], count - 1)
        }
    }
    return true
};
// @lc code=end

