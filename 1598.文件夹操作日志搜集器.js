/*
 * @Author: linqibin
 * @Date: 2022-12-15 15:38:59
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-15 15:40:23
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1598 lang=javascript
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    const stack = []
    for (const log of logs) {
        if (log === './') {
            continue
        }
        if (log === '../') {
            stack.pop()
        } else  {
            stack.push(log)
        }
    }
    return stack.length
};
// @lc code=end

