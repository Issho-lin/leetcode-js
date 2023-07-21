/*
 * @Author: linqibin
 * @Date: 2022-10-17 15:18:03
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-17 15:30:19
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let val = 0, res = ''
    let p = 0
    while (a[p] || b[p] || val) {
        if (a[a.length - 1 - p]) {
            val += (+a[a.length - 1 - p])
        }
        if (b[b.length - 1 - p]) {
            val += (+b[b.length - 1 - p])
        }
        res = val % 2 + res
        val = val / 2 >> 0
        p++
    }
    return res
};
// @lc code=end

