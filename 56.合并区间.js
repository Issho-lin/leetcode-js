/*
 * @Author: linqibin
 * @Date: 2022-10-14 08:38:48
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-14 08:52:18
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length < 2) {
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        const cur = intervals[i], last = res[res.length - 1]
        if (cur[0] > last[1]) {
            res.push(cur)
        } else if (cur[1] > last[1]) {
            last[1] = cur[1]
        }
    }
    return res
};
// @lc code=end

