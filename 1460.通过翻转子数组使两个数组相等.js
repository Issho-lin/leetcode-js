/*
 * @Author: linqibin
 * @Date: 2022-12-05 14:56:49
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 15:00:38
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1460 lang=javascript
 *
 * [1460] 通过翻转子数组使两个数组相等
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    target.sort((a, b) => a - b)
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== target[i]) {
            return false
        }
    }
    return true
};
// @lc code=end

