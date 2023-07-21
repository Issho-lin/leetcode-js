/*
 * @Author: linqibin
 * @Date: 2022-12-20 16:13:46
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-20 16:31:39
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2475 lang=javascript
 *
 * [2475] 数组中不等三元组的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    /**
     * 对于 x，设：
     * 小于 x 的数有 a 个；
     * 等于 x 的数有 b 个；
     * 大于 x 的数有 c 个。
     * 那么 x 对答案的贡献是 abc
     */
    nums.sort((a, b) => a - b)
    let sum = 0, n = nums.length
    for (let l = 0, r = 1; r < n;) {
        if (nums[l] !== nums[r]) {
            sum += l * (r - l) * (n  - r)
            l = r
        } else {
            r++
        }
    }
    return sum
};
// @lc code=end

