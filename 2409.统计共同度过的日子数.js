/*
 * @lc app=leetcode.cn id=2409 lang=javascript
 *
 * [2409] 统计共同度过的日子数
 */

// @lc code=start
/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    if (compare(leaveAlice, arriveBob) < 0) {
        return 0
    }
    if (compare(leaveBob, arriveAlice) < 0) {
        return 0
    }
    if (compare(arriveAlice, arriveBob) <= 0) {
        if (compare(leaveAlice, leaveBob) >= 0) {
            return diff(arriveBob, leaveBob)
        }
        return diff(arriveBob, leaveAlice)
    } else {
        if (compare(leaveAlice, leaveBob) <= 0) {
            return diff(arriveAlice, leaveAlice)
        }
        return diff(arriveAlice, leaveBob)
    }
};
var compare = function(date1, date2) {
    const [month1, day1] = date1.split('-').map(item => +item)
    const [month2, day2] = date2.split('-').map(item => +item)
    if (month1 > month2) {
        return 1
    }
    if (month1 < month2) {
        return -1
    }
    if (day1 > day2) {
        return 1
    }
    if (day1 < day2) {
        return -1
    }
    return 0
}
var diff = function(date1, date2) {
    const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const [month1, day1] = date1.split('-').map(item => +item)
    const [month2, day2] = date2.split('-').map(item => +item)
    if (month1 === month2) {
        return day2 - day1 + 1
    }
    let days = 0
    for (let i = month1 + 1; i < month2; i++) {
        days += monthDay[i - 1]
    }
    days += (monthDay[month1 - 1] - day1 + 1)
    days += day2
    return days
}
// @lc code=end

