/*
 * @Author: linqibin
 * @Date: 2022-11-18 09:10:10
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 09:14:55
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const score = []
    for (const item of operations) {
        if (item === 'C') {
            score.pop()
        } else if (item === 'D') {
            score.push(score[score.length - 1] * 2)
        } else if (item === '+') {
            score.push(score[score.length - 2] + score[score.length - 1])
        } else {
            score.push(+item)
        }
    }
    return score.reduce((a, b) => a + b, 0)
};
// @lc code=end

