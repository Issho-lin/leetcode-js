/*
 * @Author: linqibin
 * @Date: 2022-11-24 09:13:07
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 09:20:40
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false
    }
    let flag = 'asc'
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            return false
        }
        if (flag === 'desc') {
            if (arr[i] > arr[i - 1]) {
                return false
            }
        }
        if (arr[i] < arr[i - 1]) {
            if (i === 1) {
                return false
            }
            flag = 'desc'
        }
    }
    return flag === 'desc'
};
// @lc code=end

