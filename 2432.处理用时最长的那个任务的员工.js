/*
 * @Author: linqibin
 * @Date: 2022-12-23 10:46:54
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-23 10:54:37
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2432 lang=javascript
 *
 * [2432] 处理用时最长的那个任务的员工
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    let max = -Infinity, id = -1
    for (let i = 0; i < logs.length; i++) {
        if (i === 0) {
            [id, max] = logs[i]
            continue
        }
        const time = logs[i][1] - logs[i - 1][1]
        if (time > max || (time === max && logs[i][0] < id)) {
            max = time
            id = logs[i][0]
        }
    }
    return id
};

// hardestWorker(10, [[0,3],[2,5],[0,9],[1,15]])
// @lc code=end

