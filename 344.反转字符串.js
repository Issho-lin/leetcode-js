/*
 * @Author: linqibin
 * @Date: 2022-11-02 11:26:43
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-02 11:28:54
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0, right = s.length - 1
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
};
// @lc code=end

