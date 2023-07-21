/*
 * @Author: linqibin
 * @Date: 2022-12-05 10:20:07
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 10:48:39
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const map = new Map()
    const sortArr = [...nums]
    sortArr.sort((a, b) => a - b)
    for (let i = sortArr.length - 1; i >= 0; i--) {
        map.set(sortArr[i], i)
    }
    const ret = []
    for (let i = 0; i < nums.length; i++) {
        ret[i] = map.get(nums[i])
    }
    return ret
};
// @lc code=end

