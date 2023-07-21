/*
 * @Author: linqibin
 * @Date: 2022-11-09 15:41:27
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-11 08:54:45
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=473 lang=javascript
 *
 * [473] 火柴拼正方形
 */

// @lc code=start
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    if (matchsticks.length < 4) {
        return false
    }
    const allLen = matchsticks.reduce((a, b) => a + b)
    if (allLen % 4 !== 0) {
        return false
    }
    const sideLen = allLen / 4, sideList = new Array(4).fill(0)
    matchsticks.sort((a, b) => b - a)
    const dfs = (idx) => {
        if (idx === matchsticks.length) {
            return sideList.every(item => item === sideLen)
        } else {
            const targetLen = matchsticks[idx]
            if (targetLen > sideLen) {
                return false
            }
            for (let i = 0; i < sideList.length; i++) {
                if (sideList[i] + targetLen <= sideLen) {
                    sideList[i] += targetLen
                    if (dfs(idx + 1)) {
                        return true
                    }
                    sideList[i] -= targetLen
                }
                
            }
        }
        return false
    }
    return dfs(0)
};

// @lc code=end

