/*
 * @Author: linqibin
 * @Date: 2023-01-17 10:51:02
 * @LastEditors: linqibin
 * @LastEditTime: 2023-01-17 11:03:11
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1736 lang=javascript
 *
 * [1736] 替换隐藏数字得到的最晚时间
 */

// @lc code=start
/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    const [hour, min] = time.split(':')
    let h = '', m = ''
    if (hour[0] === '?') {
        if (hour[1] === '?') {
            h = '23'
        } else if (+hour[1] < 4) {
            h = '2' + hour[1]
        } else {
            h = '1' + hour[1]
        }
    } else if (hour[0] === '2') {
        if (hour[1] === '?') {
            h = '23'
        } else {
            h = hour[0] + hour[1]
        }
    } else {
        if (hour[1] === '?') {
            h = hour[0] + '9'
        } else {
            h = hour[0] + hour[1]
        }
    }

    if (min[0] === '?') {
        if (min[1] === '?') {
            m = '59'
        } else {
            m = '5' + min[1]
        }
    } else {
        if (min[1] === '?') {
            m = min[0] + '9'
        } else {
            m = min[0] + min[1]
        }
    }
    return h + ':' + m
};
// @lc code=end

