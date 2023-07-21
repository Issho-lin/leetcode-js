/*
 * @Author: linqibin
 * @Date: 2023-02-10 15:26:12
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-10 15:45:38
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1925 lang=javascript
 *
 * [1925] 统计平方和三元组的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let res = 0
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            const c = Math.floor(Math.sqrt(a ** 2 + b ** 2))
            if (c <= n && c ** 2 === a ** 2 + b ** 2) {
                res++
            }
        }
    }
    return res * 2
};
// @lc code=end

