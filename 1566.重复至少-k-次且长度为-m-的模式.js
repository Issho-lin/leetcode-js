/*
 * @Author: linqibin
 * @Date: 2022-12-13 14:38:33
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-13 14:57:35
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1566 lang=javascript
 *
 * [1566] 重复至少 K 次且长度为 M 的模式
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    const n = arr.length
    if (n < m * k) {
        return false
    }
    for (let l = 0; l <= n - m * k; l++) {
        let offset
        for (offset = 0; offset < m * k; offset++) {
            if (arr[l + offset] !== arr[l + offset % m]) {
                break
            }
        }
        if (offset === m * k) {
            return true
        }
    }
    return false
};
// @lc code=end

