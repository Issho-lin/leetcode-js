/*
 * @Author: linqibin
 * @Date: 2022-12-13 11:52:21
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-13 11:55:57
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    if (n < 1000) {
        return `${n}`
    }
    let ret = '', cnt = 0
    while (n) {
        ret = n % 10 + ret
        cnt++
        n = n / 10 >> 0
        if (cnt === 3 && n > 0) {
            ret = '.' + ret
            cnt = 0
        }
    }
    return ret
};
// @lc code=end

