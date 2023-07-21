/*
 * @Author: linqibin
 * @Date: 2022-12-23 09:54:54
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-23 10:13:39
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2437 lang=javascript
 *
 * [2437] 有效时间的数目
 */

// @lc code=start
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    let h = 1, m = 1
    for (let i = time.length - 1; i >= 0; i--) {
        if (time[i] !== '?') {
            continue
        }
        if (i === 4) {
            if (time[i - 1] === '?') {
                m = 60
            } else {
                m = 10
            }
            i--
        } else if (i === 3) {
            m = 6
        } else if (i === 1) {
            if (time[0] === '?') {
                h = 24
            } else if (time[0] === '0' || time[0] === '1') {
                h = 10
            } else if (time[0] === '2') {
                h = 4
            }
            i--
        } else if (i === 0) {
            if (+time[1] < 4) {
                h = 3
            } else {
                h = 2
            }
        }
    }
    return h * m
};

// countTime('?4:22')
// @lc code=end

