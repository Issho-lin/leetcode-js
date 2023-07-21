/*
 * @Author: linqibin
 * @Date: 2023-02-13 15:48:12
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-13 15:59:32
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2215 lang=javascript
 *
 * [2215] 找出两数组的不同
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1), set2 = new Set(nums2), set = new Set()
    const answer = new Array([], [])
    for (let i = 0; i < nums1.length; i++) {
        if (!set2.has(nums1[i]) && !set.has(nums1[i])) {
            answer[0].push(nums1[i])
            set.add(nums1[i])
        }
    }
    set.clear()
    for (let i = 0; i < nums2.length; i++) {
        if (!set1.has(nums2[i]) && !set.has(nums2[i])) {
            answer[1].push(nums2[i])
            set.add(nums2[i])
        }
    }
    return answer
};
// @lc code=end

