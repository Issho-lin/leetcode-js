/*
 * @Author: linqibin
 * @Date: 2023-02-10 15:02:57
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-10 15:14:54
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1903 lang=javascript
 *
 * [1903] 字符串中的最大奇数
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let idx = -1, res = ''
    for (let i = num.length - 1; i >= 0; i--) {
        if ((+num[i]) % 2 === 1) {
            idx = i
            break
        }
    }
    for (let i = 0; i <= idx; i++) {
        res += num[i]
    }
    return res
};
// @lc code=end

