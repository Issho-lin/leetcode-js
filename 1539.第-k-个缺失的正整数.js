/*
 * @Author: linqibin
 * @Date: 2022-12-13 11:19:03
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-13 11:39:50
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1539 lang=javascript
 *
 * [1539] 第 k 个缺失的正整数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    // 前面缺
    for (let i = 1; i < arr[0]; i++) {
        k--
        if (k === 0) {
            return i
        }
    }
    // 中间缺
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1] - 1
        if (diff === 0) {
            continue
        }
        if (diff >= k) {
            return arr[i - 1] + k
        } else {
            k -= diff
        }
    }
    // 后面缺
    return arr[arr.length - 1] + k
};

// findKthPositive([1,10,21,22,25], 12)
// @lc code=end

