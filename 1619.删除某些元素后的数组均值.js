/*
 * @Author: linqibin
 * @Date: 2022-12-15 17:55:49
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-15 17:58:23
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1619 lang=javascript
 *
 * [1619] 删除某些元素后的数组均值
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a, b) => a - b)
    const total = arr.length, cnt = total * 0.05
    let sum = 0
    for (let i = cnt; i < total - cnt; i++) {
        sum += arr[i]
    }
    return sum / (total - cnt * 2)
};
// @lc code=end

