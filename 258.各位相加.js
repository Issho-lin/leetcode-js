/*
 * @Author: linqibin
 * @Date: 2022-10-31 15:15:45
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-31 15:26:38
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num / 10 >= 1) {
        num = (num / 10 >> 0) + num % 10
    }
    return num
};
// @lc code=end

