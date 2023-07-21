/*
 * @Author: linqibin
 * @Date: 2022-11-24 08:57:47
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 09:01:45
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function() {
    this.request = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.request.push(t)
    const start = t - 3000
    let count = 0
    for (const req of this.request) {
        if (req >= start) {
            count++
        }
    }
    return count
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

