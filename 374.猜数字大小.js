/*
 * @Author: linqibin
 * @Date: 2022-11-03 11:35:47
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-03 11:39:21
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 0, right = n
    while (left <= right) {
        const mid = (left + right) / 2 >> 0
        if (guess(mid) === -1) {
            right = mid - 1
        } else if (guess(mid) === 1) {
            left = mid + 1
        } else {
            return mid
        }
    }
};
// @lc code=end

