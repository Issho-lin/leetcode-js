/*
 * @Author: linqibin
 * @Date: 2022-11-29 10:52:49
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 11:17:44
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let queue = []
    for (let i = 0; i < arr.length; i++) {
        queue.push(arr[i])
        if (arr[i] === 0) {
            queue.push(0)
        }
        arr[i] = queue.shift()
    }
};
// @lc code=end

