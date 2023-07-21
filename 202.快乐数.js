/*
 * @Author: linqibin
 * @Date: 2022-10-27 10:13:07
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-27 10:25:54
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let p = n, q = n
    while (q !== 1 && getNext(q) !== 1) {
        p = getNext(p)
        q = getNext(getNext(q))
        if (p === q) {
            return false
        }
    }
    return true
};
var getNext = function(n) {
    let res = 0
    while (n > 0) {
        res += (n % 10) ** 2
        n = n / 10 >> 0
    }
    return res
}
// @lc code=end

