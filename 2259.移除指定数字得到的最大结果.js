/*
 * @Author: linqibin
 * @Date: 2022-12-20 14:35:13
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-20 14:57:12
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2259 lang=javascript
 *
 * [2259] 移除指定数字得到的最大结果
 */

// @lc code=start
/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let res = ''
    const idx = findIdx(number, digit)
    for (let i = 0; i < number.length; i++) {
        if (i === idx) {
            continue
        }
        res += number[i]
    }
    return res
};
var findIdx = function(number, digit) {
    let idx = -1
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit && number[i + 1] > digit) {
            idx = i
            break
        }
    }
    if (idx === -1) {
        for (let i = number.length - 1; i >= 0; i--) {
            if (number[i] === digit) {
                idx = i
                break
            }
        }
    }
    return idx
}
// @lc code=end

