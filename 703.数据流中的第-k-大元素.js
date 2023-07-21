/*
 * @Author: linqibin
 * @Date: 2022-11-18 10:06:42
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 10:20:42
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.data = nums.sort((a, b) => b - a)
    this.kNum = nums[k - 1]
    this.k = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.data.push(val)
    if (val <= this.kNum) {
        return this.kNum
    }
    this.data.sort((a, b) => b - a)
    this.kNum = this.data[this.k - 1]
    return this.kNum
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

