/*
 * @Author: linqibin
 * @Date: 2022-11-22 17:40:51
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 17:44:08
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    const binary = n.toString(2)
    let max = -Infinity, prev = -1, cur = -1
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            cur = i
            if (prev >= 0) {
                max = Math.max(max, cur - prev)
            }
            prev = cur
        }
    }
    return max === -Infinity ? 0 : max
};
// @lc code=end

