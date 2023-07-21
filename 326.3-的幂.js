/*
 * @Author: linqibin
 * @Date: 2022-11-02 09:41:02
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-02 09:41:53
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n >= 3) {
        n /= 3
    }
    return n === 1
};
// @lc code=end

