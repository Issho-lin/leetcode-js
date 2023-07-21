/*
 * @Author: linqibin
 * @Date: 2022-11-01 10:48:55
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-01 11:00:47
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n
        while (left <= right) {
            const mid = (left + right) / 2 >> 0
            const flag = isBadVersion(mid)
            if (flag) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return left
    };
};
// @lc code=end

