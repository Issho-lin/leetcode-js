/*
 * @Author: linqibin
 * @Date: 2022-12-06 17:39:59
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-06 17:41:41
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = -Infinity, min = Infinity
    for (const item of salary) {
        max = Math.max(max, item)
        min = Math.min(min, item)
    }
    let sum = 0
    for (const item of salary) {
        if (item !== max && item !== min) {
            sum += item
        }
    }
    return sum / (salary.length - 2)
};
// @lc code=end

