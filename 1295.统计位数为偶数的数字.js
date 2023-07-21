/*
 * @Author: linqibin
 * @Date: 2022-12-02 17:43:45
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-02 17:47:52
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1295 lang=javascript
 *
 * [1295] 统计位数为偶数的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let cnt = 0
    for (const num of nums) {
        if (num >= 10 && num <= 99 || num >= 1000 && num <= 9999 || num === 100000) {
            cnt++
        }
    }
    return cnt
};
// @lc code=end

