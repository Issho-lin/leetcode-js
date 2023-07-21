/*
 * @Author: linqibin
 * @Date: 2022-11-29 15:26:56
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 15:42:11
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const [year, month, day] = date.split('-').map(item => Number(item))
    // console.log(year, month, day);
    if (month < 2) {
        return day
    }
    const daysMap = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let days = 0
    // 前几个月的
    for (let i = 0; i < month - 1; i++) {
        days += daysMap[i]
    }
    // 当前月的
    days += day
    // 闰年的
    if (month > 2 && isLeapYear(year)) {
        days += 1
    }
    return days
};
var isLeapYear = function(year) {
    // 400的倍数 或 4的倍数且不是100的倍数
    if (year % 400 === 0) {
        return true
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        return true
    }
    return false
}

// @lc code=end

