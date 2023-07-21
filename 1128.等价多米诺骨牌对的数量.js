/*
 * @Author: linqibin
 * @Date: 2022-11-29 14:44:36
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 14:47:01
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let count = 0
    for (let i = 0; i < dominoes.length; i++) {
        for (let j = i + 1; j < dominoes.length; j++) {
            const [a, b] = dominoes[i]
            const [c, d] = dominoes[j]
            if (a === c && b === d || a === d && b === c) {
                count++
            }
        }
    }
    return count
};
// @lc code=end

