/*
 * @Author: linqibin
 * @Date: 2023-04-03 15:42:34
 * @LastEditors: linqibin
 * @LastEditTime: 2023-04-03 15:43:14
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 1. 合并数组
    let arr = nums1.concat(nums2);
    // 2. 排序
    arr.sort((a, b) => a - b);
    // 3. 获取中位数
    let len = arr.length;
    if (len % 2 === 0) {
        return (arr[len / 2 - 1] + arr[len / 2]) / 2;
    }
    return arr[(len - 1) / 2];
};
// @lc code=end

