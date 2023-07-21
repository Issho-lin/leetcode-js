/*
 * @Author: linqibin
 * @Date: 2022-11-29 17:05:51
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 17:30:49
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1185 lang=javascript
 *
 * [1185] 一周中的第几天
 */

// @lc code=start
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    // 1971年1月1日是星期五
    const weekMap = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
    const daysMap = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    // 1971年到上一年之间贡献的天数
    let days = (year - 1971) * 365
    // 1971年到上一年之间由于闰年贡献的天数
    for (let i = 1971; i < year; i++) {
        if (isLeapYear(i)) {
            days++
        }
    }
    // 当年本月份之前贡献的天数
    for (let i = 0; i < month - 1; i++) {
        days += daysMap[i]
    }
    // 闰年2月份 +1
    if (month > 2 && isLeapYear(year)) {
        days++
    }
    // 当月贡献的天数
    days += day
    return weekMap[(days - 1) % 7]
};
var isLeapYear = function(year) {
    if (year % 400 === 0) {
        return true
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        return true
    }
    return false
}

// dayOfTheWeek(1, 1, 1971)
// @lc code=end

