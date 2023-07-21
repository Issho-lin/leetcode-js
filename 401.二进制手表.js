/*
 * @Author: linqibin
 * @Date: 2022-11-15 16:58:02
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-15 17:15:16
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const ans = []
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            const [hourOn, minOn] = [i, j].map(item => countOne(item))
            if (hourOn + minOn === turnedOn) {
                ans.push(`${i}:${j < 10 ? '0' + j : j}`)
            }
        }
    }
    return ans
};
var countOne = function(n) {
    let count = 0
    while (n) {
        n &= (n - 1)
        count++
    }
    return count
}
// @lc code=end

