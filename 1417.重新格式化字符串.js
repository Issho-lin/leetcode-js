/*
 * @Author: linqibin
 * @Date: 2022-12-05 15:26:52
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 15:35:37
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    const str = [], nums = []
    for (const item of s) {
        if (/[0-9]/.test(item)) {
            nums.push(item)
        } else {
            str.push(item)
        }
    }
    const numsLen = nums.length, strLen = str.length
    if (Math.abs(numsLen - strLen) > 1) {
        return ''
    }
    let ret = ''
    if (numsLen > strLen) {
        for (let i = 0; i < strLen; i++) {
            ret += (nums[i] + str[i])
        }
        ret += nums[numsLen - 1]
    } else {
        for (let i = 0; i < numsLen; i++) {
            ret += (str[i] + nums[i])
        }
        if (strLen > numsLen) {
            ret += str[strLen - 1]
        }
    }
    return ret
};
// @lc code=end

