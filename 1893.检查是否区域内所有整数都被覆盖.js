/*
 * @Author: linqibin
 * @Date: 2023-02-10 14:42:43
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-10 14:59:40
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1893 lang=javascript
 *
 * [1893] 检查是否区域内所有整数都被覆盖
 */

// @lc code=start
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    const isBetween = (item) => {
        for (let i = 0; i < ranges.length; i++) {
            const [start, end] = ranges[i]
            if (start <= item && item <= end) {
                return true
            }
        }
        return false
    }

    for (let i = left; i <= right; i++) {
        if (!isBetween(i)) {
            return false
        }
    }
    return true
};
// @lc code=end

