/*
 * @Author: linqibin
 * @Date: 2022-12-05 10:51:45
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 11:19:09
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1360 lang=javascript
 *
 * [1360] 日期之间隔几天
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    const num1 = daysTo1971(date1)
    const num2 = daysTo1971(date2)
    return Math.abs(num1 - num2)
};
var daysTo1971 = function(date) {
    const [year, month, day] = date.split('-').map(item => +item)
    // 今年以前的
    let days = (year - 1971) * 365
    for (let i = 1971; i < year; i++) {
        if (isLeapYear(i)) {
            days++
        }
    }
    // 今年的
    const monthDaysMap = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for (let i = 0; i < month - 1; i++) {
        days += monthDaysMap[i]
    }
    if (month > 2 && isLeapYear(year)) {
        days++
    }
    days += day
    return days

}
var isLeapYear = function(year) {
    if (year % 400 === 0) {
        return true
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        return true
    }
    return false
}

// daysBetweenDates('2020-01-15', '2019-12-31')
// @lc code=end

