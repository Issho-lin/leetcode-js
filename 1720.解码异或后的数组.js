/*
 * @Author: linqibin
 * @Date: 2023-01-17 10:33:55
 * @LastEditors: linqibin
 * @LastEditTime: 2023-01-17 10:39:01
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1720 lang=javascript
 *
 * [1720] 解码异或后的数组
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    /**
     * 任何数与本身异或等于0
     * 任何数与0异或等本身
     * 即：a ^ a ^ b = b
     */
    const arr = [first]
    for (let i = 0; i < encoded.length; i++) {
        // arr[0] ^ arr[1] = encoded[0]
        // arr[1] = arr[0] ^ arr[0] ^ arr[1] = arr[0] ^ encoded[0]
        arr[i + 1] = arr[i] ^ encoded[i]
    }
    return arr
};
// @lc code=end

