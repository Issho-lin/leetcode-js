/*
 * @Author: linqibin
 * @Date: 2022-12-13 11:56:42
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-13 11:58:32
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1550 lang=javascript
 *
 * [1550] 存在连续三个奇数的数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 === 0) {
            continue
        }
        if (arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
            return true
        }
    }
    return false
};
// @lc code=end

