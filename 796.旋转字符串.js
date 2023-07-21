/*
 * @Author: linqibin
 * @Date: 2022-11-21 14:39:09
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-21 14:40:48
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) {
        return false
    }
    let str = s.repeat(2)
    return str.includes(goal)
};
// @lc code=end

