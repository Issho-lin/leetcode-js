/*
 * @Author: linqibin
 * @Date: 2022-11-29 15:02:58
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 15:08:44
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b)
    let min = Infinity
    const res = []
    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1]
        if (diff < min) {
            min = diff
            res.splice(0, res.length)
        }
        if (diff === min) {
            res.push([arr[i - 1], arr[i]])
        }
    }
    return res
};
// @lc code=end

