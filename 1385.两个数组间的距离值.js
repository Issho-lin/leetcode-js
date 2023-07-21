/*
 * @Author: linqibin
 * @Date: 2022-12-05 08:57:26
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 08:59:13
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1385 lang=javascript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    var isValid = (val) => {
        for (const item of arr2) {
            if (Math.abs(val - item) <= d) {
                return false
            } 
        }
        return true
    }
    let cnt = 0
    for (const item of arr1) {
        if (isValid(item)) {
            cnt++
        }
    }
    return cnt
};
// @lc code=end

