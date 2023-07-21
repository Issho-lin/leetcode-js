/*
 * @Author: linqibin
 * @Date: 2023-02-13 17:34:39
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-13 17:36:06
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2037 lang=javascript
 *
 * [2037] 使每位学生都有座位的最少移动次数
 */

// @lc code=start
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => a - b)
    students.sort((a, b) => a - b)
    let res = 0
    for (let i = 0; i < seats.length; i++) {
        res += Math.abs(seats[i] - students[i])
    }
    return res
};
// @lc code=end

