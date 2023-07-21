/*
 * @Author: linqibin
 * @Date: 2022-11-02 11:26:02
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-02 11:26:28
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    while (n >= 4) {
        n /= 4
    }
    return n === 1
};
// @lc code=end

