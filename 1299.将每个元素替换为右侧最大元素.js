/*
 * @Author: linqibin
 * @Date: 2022-12-02 17:51:09
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-02 17:54:01
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1299 lang=javascript
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            arr[i] = -1
        } else {
            arr[i] = getMax(arr, i + 1)
        }
    }
    return arr
};
var getMax = function(arr, start) {
    let max = -Infinity
    for (let i = start; i < arr.length; i++) {
        max = Math.max(max, arr[i])
    }
    return max
}
// @lc code=end

