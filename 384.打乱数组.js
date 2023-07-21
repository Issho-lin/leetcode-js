/*
 * @Author: linqibin
 * @Date: 2022-11-03 11:49:53
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-03 15:03:56
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const list = [...this.nums];
  for (let i = 0; i < list.length; i++) {
    const j = Math.floor(Math.random() * (list.length - i)) + i;
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
