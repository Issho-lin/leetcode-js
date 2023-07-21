/*
 * @Author: linqibin
 * @Date: 2022-12-05 16:29:06
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 16:38:24
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1512 lang=javascript
 *
 * [1512] 好数对的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const map = new Map()
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    let res = 0
    for (const val of map.values()) {
        if (val > 1) {
            // An取2 = n * (n - 1) / 2 * 1
            res += ( val * (val - 1)/ 2)
        }
    }
    return res
};
// @lc code=end

