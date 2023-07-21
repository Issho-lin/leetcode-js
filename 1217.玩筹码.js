/*
 * @Author: linqibin
 * @Date: 2022-12-01 16:44:34
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-01 16:48:59
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 *
 * [1217] 玩筹码
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    // 将所有奇数位移动到位置1，将所有偶数位移动到位置2，这时没有成本
    // 位置1上拥有所有奇数位移过来的筹码，位置2拥有所有偶数位移过来的筹码
    // 1和2的位置上取少的进行移动
    let odd = 0, even = 0
    for (const pos of position) {
        if (pos % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    return Math.min(odd, even)
};
// @lc code=end

