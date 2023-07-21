/*
 * @Author: linqibin
 * @Date: 2022-11-25 14:07:40
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-25 14:19:29
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const sum = arr.reduce((a, b) => a + b)
    if (sum % 3 !== 0) {
        return false
    }
    let calculate = 0, idx = -1
    for (let i = 0; i < arr.length; i++) {
        calculate += arr[i]
        if (calculate === sum / 3) {
            if (idx > -1 && i !== arr.length - 1) {
                return true
            }
            idx = i
            calculate = 0
        }
    }
    return false
};
// @lc code=end

