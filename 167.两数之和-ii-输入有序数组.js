/*
 * @Author: linqibin
 * @Date: 2022-10-24 14:30:54
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-24 14:40:14
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1
    while (left < right) {
        const sum = numbers[left] + numbers[right]
        if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        } else {
            return [left + 1, right + 1]
        }
    }
};
// @lc code=end

