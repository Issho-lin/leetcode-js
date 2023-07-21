/*
 * @Author: linqibin
 * @Date: 2022-11-03 08:37:45
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-03 09:01:19
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    /**
     * 思路：
     * 1.异或为无进位相加，与的结果为进位
     * 2.两数相加=异或结果+与的结果左移1位
     * 3.重复这个过程，直到与的结果为0，即没有进位，异或的结果就是相加的结果
     */
    let sum = a
    while (b) {
        sum = a ^ b
        b = (a & b) << 1
        a = sum
    }
    return sum
};
// @lc code=end

