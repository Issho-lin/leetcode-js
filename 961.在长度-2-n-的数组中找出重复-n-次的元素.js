/*
 * @Author: linqibin
 * @Date: 2022-11-24 09:54:39
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 10:35:47
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 在长度 2N 的数组中找出重复 N 次的元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    // const set = new Set()
    // for (const num of nums) {
    //     if (set.has(num)) {
    //         return num
    //     }
    //     set.add(num)
    // }
    // 扣掉最后一个元素，使其符合摩尔投票的条件
    // 如果扣掉的那个元素，还在剩余的里面出现过，则直接返回
    // 否则，剩余的元素进行摩尔投票得到结果
    const last = nums[nums.length - 1]
    let major = nums[0], count = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === last) {
            return last
        }
        if (count === 0) {
            major = nums[i]
        }
        if (nums[i] === major) {
            count++
        } else {
            count--
        }
    }
    return major
};
// @lc code=end

