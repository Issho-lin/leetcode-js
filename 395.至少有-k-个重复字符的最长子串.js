/*
 * @Author: linqibin
 * @Date: 2022-11-04 10:50:53
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-04 11:50:35
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有 K 个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    const countMap = new Map()
    for (let i = 0; i < s.length; i++) {
        countMap.set(s[i], (countMap.get(s[i]) || 0) + 1)
    }
    // console.log('countMap', countMap)
    const splits = []
    for (let i = 0; i < s.length; i++) {
        // console.log(s, '------', s[i], '----', countMap.get(s[i]), k, countMap.get(s[i]) < k)
        if (countMap.get(s[i]) < k) {
            // console.log('******')
            splits.push(i)
        }
    }
    splits.push(s.length)
    // console.log('splits', splits)
    if (splits.length === 1) {
        return s.length
    }
    let pre = 0, ans = 0
    for (const p of splits) {
        let len = p - pre
        if (len >= k) {
            ans = Math.max(ans, longestSubstring(s.substr(pre, len), k))
        }
        pre = p + 1
    }
    return ans
};
// @lc code=end

