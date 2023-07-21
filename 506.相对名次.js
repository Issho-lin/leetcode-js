/*
 * @Author: linqibin
 * @Date: 2022-11-14 15:12:50
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-14 15:43:41
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const rank = new Array(score.length).fill(1)
    for (let i = 0; i < score.length; i++) {
        for (let j = 0; j < score.length; j++) {
            if (i === j) {
                continue
            }
            if (score[j] > score[i]) {
                rank[i]++
            }
        }
    }
    const medal = ["Gold Medal", "Silver Medal", "Bronze Medal"]
    return rank.map(item => item > 3 ? `${item}` : medal[item - 1])
};

// @lc code=end

