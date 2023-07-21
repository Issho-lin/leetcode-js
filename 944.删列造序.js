/*
 * @Author: linqibin
 * @Date: 2022-11-24 11:15:25
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 11:20:11
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            // console.log(i, strs[j - 1][i], strs[j][i]);
            if (strs[j - 1][i] > strs[j][i]) {
                count++
                break
            }
        }
    }
    return count
};
// @lc code=end

