/*
 * @Author: linqibin
 * @Date: 2022-11-02 11:58:58
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-02 14:09:27
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map()
    for (let i = 0; i < nums2.length; i++) {
        map.set(nums2[i], (map.get(nums2[i]) || 0) + 1)
    }
    const arr = []
    for (let i = 0; i < nums1.length; i++) {
        if (map.has(nums1[i])) {
            arr.push(nums1[i])
            const v = map.get(nums1[i])
            if (v - 1 === 0) {
                map.delete(nums1[i])
            } else {
                map.set(nums1[i], v - 1)
            }
        }
    }
    return arr
};
// @lc code=end

