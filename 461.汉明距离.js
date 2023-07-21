/*
 * @Author: linqibin
 * @Date: 2022-11-09 14:37:19
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-09 14:40:59
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const ret = (x ^ y).toString(2)
    let count = 0
    for (let i = 0; i < ret.length; i++) {
        count += (+ret[i])
    }
    return count
};
// @lc code=end

