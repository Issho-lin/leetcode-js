/*
 * @Author: linqibin
 * @Date: 2022-10-12 10:52:22
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 17:40:31
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    const stack = []
    let k = 1
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            stack.push('1')
        } else {
            const pre = stack[i - 2]
            let res = ''
            for (let j = 0; j < pre.length; j++) {
                if (pre[j] === pre[j + 1]) {
                    k++
                } else {
                    res += k + pre[j]
                    k = 1
                }
            }
            stack.push(res)
        }
    }
    return stack[n - 1]
};
// @lc code=end

