/*
 * @Author: linqibin
 * @Date: 2022-11-02 11:50:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-02 11:57:10
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map = new Map()
    for (let i = 0; i < nums2.length; i++) {
        map.set(nums2[i], i)
    }
    const set = new Set()
    for (let i = 0; i < nums1.length; i++) {
        if (map.has(nums1[i])) {
            set.add(nums1[i])
        }
    }
    return [...set]
};
// @lc code=end

