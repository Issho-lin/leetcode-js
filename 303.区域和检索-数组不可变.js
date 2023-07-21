/*
 * @Author: linqibin
 * @Date: 2022-11-02 08:45:41
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-02 08:51:38
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.stack = nums
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let sum = 0
    while (left <= right) {
        if (left === right) {
            sum += this.stack[left++]
        } else {
            sum += (this.stack[left++] + this.stack[right--])
        }
    }
    return sum
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

