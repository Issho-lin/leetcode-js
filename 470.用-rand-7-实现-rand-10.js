/*
 * @Author: linqibin
 * @Date: 2022-11-09 14:45:21
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-09 15:32:35
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=470 lang=javascript
 *
 * [470] 用 Rand7() 实现 Rand10()
 */

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
    // rxy = (rx - 1) * y + ry
    while (true) {
        // x=7,y=7 => r49，[1-49]
        let num = (rand7() - 1) * 7 + rand7()
        if (num <= 40) {
            // num % 10, [0-9]
            return num % 10 + 1
        }
        // [41-49] => [1-9] => r9
        // x=9,y=7 => r63
        num = (num - 40 - 1) * 7 + rand7() 
        if (num <= 60) {
            return num % 10 + 1
        } 
        // [61-63] => [1-3] => r3
        // x=3,y=7 => r21
        num = (num - 60 - 1) * 7 + rand7()
        if (num <= 20) {
            return num % 10 + 1
        }
        // [21]，放弃
    }
};
// @lc code=end

