/*
 * @Author: linqibin
 * @Date: 2022-11-29 16:57:18
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 17:05:42
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1184 lang=javascript
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    const allDistance = distance.reduce((a, b) => a + b)
    // 重新确定起点和终点，保持从编号较小的出发
    if (start > destination) {
        [start, destination] = [destination, start]
    }
    // 顺时针走
    let clockwise = 0
    for (let i = start; i < destination; i++) {
        clockwise += distance[i]
    }
    // 逆时针走
    const anticlockwise = allDistance - clockwise
    return Math.min(clockwise, anticlockwise)
};
// @lc code=end

