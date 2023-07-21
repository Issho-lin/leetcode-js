/*
 * @Author: linqibin
 * @Date: 2022-11-10 18:40:27
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-10 18:47:29
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let res = '', reverse = 0
    while (num) {
        res = (num + 1) % 2 + res
        num = num / 2 >> 0
    }
    for (let i = res.length - 1; i >= 0; i--) {
        reverse += res[i] * (2 ** (res.length - 1 - i))
    }
    return reverse
};
// @lc code=end

