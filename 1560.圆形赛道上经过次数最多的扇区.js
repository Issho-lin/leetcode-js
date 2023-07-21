/*
 * @Author: linqibin
 * @Date: 2022-12-13 14:10:06
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-13 14:31:14
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1560 lang=javascript
 *
 * [1560] 圆形赛道上经过次数最多的扇区
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
    const cnt = new Array(n).fill(0)
    for (let i = 0; i < rounds.length; i++) {
        cnt[rounds[i] - 1]++
        if (i === 0) {
            continue
        }
        let diff = rounds[i] - rounds[i - 1]
        if (diff > 0) {
            for (let j = rounds[i - 1] + 1; j < rounds[i]; j++) {
                cnt[j - 1]++
            }
        } else {
            // rounds[i - 1]到 n, 1到rounds[i]
            for (let j = rounds[i - 1] + 1; j <= n; j++) {
                cnt[j - 1]++
            }
            for (let j = 1; j < rounds[i]; j++) {
                cnt[j - 1]++
            }
        }
    }
    let max = -Infinity
    for (const num of cnt) {
        max = Math.max(max, num)
    }
    const stack = []
    for (let i = 0; i < cnt.length; i++) {
        if (cnt[i] === max) {
            stack.push(i + 1)
        }
    }
    return stack
};
// @lc code=end

