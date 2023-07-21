/*
 * @Author: linqibin
 * @Date: 2022-11-25 11:34:04
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-25 11:48:34
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const res = []
    let num = 0
    for (const n of nums) {
        // 每循环一轮，二进制前进一位
        num *= 2
        // n是当前二进制新补的最后一位
        num += n
        if (num % 5 === 0) {
            res.push(true)
        } else {
            res.push(false)
        }
        // 最终只保留最后一位，因为只要最后一位是0或5，就可以被5整除
        num %= 10
    }
    return res
};
// @lc code=end

