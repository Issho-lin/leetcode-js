/*
 * @Author: linqibin
 * @Date: 2022-11-10 18:52:09
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-11 15:01:38
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let h = search(area)
    while (area % h !== 0) {
        h--
    }
    return [area / h, h]
};

var search = function(num) {
    let left = 0, right = num
    while(left < right) {
        const mid = (left + right) >> 1
        const p = mid ** 2, q = (mid + 1) ** 2
        if (p <= num && q > num) {
            return mid
        }
        if (p < num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
}
// @lc code=end

