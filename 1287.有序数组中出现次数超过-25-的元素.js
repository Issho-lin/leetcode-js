/*
 * @Author: linqibin
 * @Date: 2022-12-02 17:32:12
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-02 17:37:02
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const n = arr.length * 0.25
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            cnt++
        } else {
            cnt = 1
        }
        if (cnt > n) {
            return arr[i]
        }
    }
};
// @lc code=end

