/*
 * @Author: linqibin
 * @Date: 2022-11-17 16:12:28
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-17 16:16:23
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let u = 0, d = 0, l = 0, r = 0
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'U':
                u++
                break
            case 'D':
                d++
                break
            case 'L':
                l++
                break
            case 'R':
                r++
                break
            default:
                break;
        }
    }
    return u === d && l === r
};
// @lc code=end

