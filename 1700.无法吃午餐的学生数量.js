/*
 * @Author: linqibin
 * @Date: 2023-01-16 16:53:54
 * @LastEditors: linqibin
 * @LastEditTime: 2023-01-16 17:23:19
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1700 lang=javascript
 *
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let count = 0
    while (students.length) {
        if (count === students.length) {
            return count
        }
        if (students[0] !== sandwiches[0]) {
            students.push(students.shift())
            count++
            continue
        }
        count = 0
        students.shift()
        sandwiches.shift()
    }
    return 0
};
// @lc code=end

