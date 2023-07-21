/*
 * @Author: linqibin
 * @Date: 2022-12-23 09:15:50
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-23 09:23:05
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2446 lang=javascript
 *
 * [2446] 判断两个事件是否存在冲突
 */

// @lc code=start
/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    const [start1, end1] = event1.map(item => toMins(item))
    const [start2, end2] = event2.map(item => toMins(item))
    if (end1 < start2) {
        return false
    }
    if (end2 < start1) {
        return false
    }
    return true
};
var toMins = function(time) {
    const [hour, min] = time.split(':').map(item => +item)
    return hour * 60 + min
}
// @lc code=end

