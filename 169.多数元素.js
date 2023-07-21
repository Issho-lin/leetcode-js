/*
 * @Author: linqibin
 * @Date: 2022-10-25 09:24:02
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 10:20:53
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // const n = nums.length / 2
    // const map = new Map()
    // for (let i = 0; i < nums.length; i++) {
    //     let count = (map.get(nums[i]) || 0) + 1
    //     if (count > n) {
    //         return nums[i]
    //     }
    //     map.set(nums[i], count)
    // }
    // 摩尔投票
    let major = nums[0], count = 1
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            // major空缺，当前候选顶上
            major = nums[i]
        }
        // 相同加一票，不相同抵消一票
        if (nums[i] === major) {
            count++
        } else {
            count--
        }
    }
    // 最后还有剩余票数的就是结果
    return major
};
// @lc code=end

