/*
 * @Author: linqibin
 * @Date: 2022-11-10 19:00:12
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-11 08:45:37
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const max = []
    for (let i = 0; i < nums1.length; i++) {
        let k = -1
        for (let j = 0; j < nums2.length; j++) {
            if (nums2[j] === nums1[i]) {
                k = j
            }
            if (k >= 0 && nums2[j] > nums1[i]) {
                max.push(nums2[j])
                break
            }
        }
        if (k < 0 || max.length === i) {
            max.push(-1)
        }
    }
    return max
};
// @lc code=end

