/*
 * @Author: linqibin
 * @Date: 2022-11-18 17:22:01
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 17:45:24
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const stack = []
    for (let i = 0; i <= cost.length; i++) {
        if (i < 2) {
            stack[i] = 0
        } else {
            // 要到达第i级阶梯，可以从第i-2走两级或从i-1走一级，从这两个方案中取花费小的
            // 即到 i-2 的花费 + i-2 到 i 的花费，或 到 i-1 的花费 + i-1 到 i 的花费，取小值
            stack[i] = Math.min(stack[i - 2] + cost[i - 2], stack[i - 1] + cost[i - 1])
        }
    }
    return stack[stack.length - 1]
};
// @lc code=end

