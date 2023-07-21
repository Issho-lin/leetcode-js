/*
 * @Author: linqibin
 * @Date: 2022-10-21 10:05:50
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-21 10:10:23
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let a = 0, b = 0
    for (const num of nums) {
        b = ~a & (b ^ num)
        a = ~b & (a ^ num)
    }
    return b
};
singleNumber([2,2,3,2])
// @lc code=end

