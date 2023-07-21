/*
 * @Author: linqibin
 * @Date: 2022-11-01 14:38:06
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-01 14:50:28
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    // 如果n能被4整除，只要对方控制在每轮拿的总数为4，先拿的必输
    if (n % 4 === 0) {
        return false
    }
    return true
};
// @lc code=end
