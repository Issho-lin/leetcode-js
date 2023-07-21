/*
 * @Author: linqibin
 * @Date: 2022-10-12 09:50:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 17:25:02
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (haystack.substr(i, needle.length) === needle) {
                return i
            }
        }
    }
    return -1
};
// @lc code=end

