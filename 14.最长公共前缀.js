/*
 * @Author: linqibin
 * @Date: 2022-10-11 09:00:48
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 15:24:00
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, prefix.length - 1)
        }
    }
    return prefix
};
// @lc code=end

